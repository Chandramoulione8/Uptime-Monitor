import requests
import time
from datetime import datetime, timezone

from apscheduler.schedulers.background import BackgroundScheduler

from database import SessionLocal
from models import URL, HealthCheck

scheduler = BackgroundScheduler()


def check_urls():
    print("=" * 50)
    print("Checking websites...")

    db = SessionLocal()

    urls = db.query(URL).all()

    for item in urls:

        try:

            start = time.time()

            response = requests.get(item.url, timeout=5)

            response_time = round(time.time() - start, 2)

            print(item.url, response.status_code, response_time)

            health = HealthCheck(
                url_id=item.id,
                status_code=response.status_code,
                response_time=response_time,
                checked_at=datetime.now(timezone.utc)
            )

            db.add(health)

        except Exception:

            print(item.url, "DOWN")

            health = HealthCheck(
    url_id=item.id,
    status_code=0,
    response_time=0,
    checked_at=datetime.now(timezone.utc)
)

            db.add(health)

    db.commit()

    db.close()

    print("=" * 50)


scheduler.add_job(
    check_urls,
    "interval",
    seconds=5
)