from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
from routes import router
from scheduler import scheduler

app = FastAPI(title="Uptime Monitor API")

# Allow React frontend to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Uptime Monitor API is Running 🚀"
    }


@app.on_event("startup")
def startup():
    if not scheduler.running:
        scheduler.start()