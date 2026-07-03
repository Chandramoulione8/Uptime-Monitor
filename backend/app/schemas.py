from pydantic import BaseModel


class URLCreate(BaseModel):
    url: str


class URLResponse(BaseModel):
    id: int
    url: str

    class Config:
        from_attributes = True
        