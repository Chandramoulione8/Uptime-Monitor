from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import URL, HealthCheck
from schemas import URLCreate

router = APIRouter()


@router.post("/urls")
def add_url(data: URLCreate, db: Session = Depends(get_db)):
    existing = db.query(URL).filter(URL.url == data.url).first()

    if existing:
        return {"message": "URL already exists"}

    new_url = URL(url=data.url)

    db.add(new_url)
    db.commit()
    db.refresh(new_url)

    return {
        "message": "URL added successfully",
        "id": new_url.id,
        "url": new_url.url
    }


@router.get("/urls")
def get_urls(db: Session = Depends(get_db)):
    urls = db.query(URL).all()

    result = []

    for url in urls:

        latest = (
            db.query(HealthCheck)
            .filter(HealthCheck.url_id == url.id)
            .order_by(HealthCheck.checked_at.desc())
            .first()
        )

        result.append({
            "id": url.id,
            "url": url.url,
            "status": latest.status_code if latest else None,
            "response_time": latest.response_time if latest else None,
            "checked_at": latest.checked_at if latest else None
        })

    return result


@router.delete("/urls/{url_id}")
def delete_url(url_id: int, db: Session = Depends(get_db)):
    url = db.query(URL).filter(URL.id == url_id).first()

    if not url:
        return {"message": "URL not found"}

    # Delete all health checks first
    db.query(HealthCheck).filter(
        HealthCheck.url_id == url_id
    ).delete()

    db.delete(url)
    db.commit()

    return {"message": "Deleted successfully"}
    