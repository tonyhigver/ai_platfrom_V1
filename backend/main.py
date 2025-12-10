from fastapi import FastAPI
from upload import router

app = FastAPI()

app.include_router(router)

@app.get("/")
def ping():
    return {"status": "ok"}
