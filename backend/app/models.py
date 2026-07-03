from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

from database import Base


class URL(Base):
    __tablename__ = "urls"

    id = Column(Integer, primary_key=True, index=True)
    url = Column(String, unique=True, nullable=False)

    checks = relationship("HealthCheck", back_populates="url")


class HealthCheck(Base):
    __tablename__ = "health_checks"

    id = Column(Integer, primary_key=True, index=True)

    url_id = Column(Integer, ForeignKey("urls.id"))

    status_code = Column(Integer)
    response_time = Column(Float)
    checked_at = Column(DateTime, default=datetime.utcnow)

    url = relationship("URL", back_populates="checks")