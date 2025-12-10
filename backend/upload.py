from fastapi import APIRouter, UploadFile

router = APIRouter()

@router.post("/upload")
async def upload(file:UploadFile):
    path = f"/tmp/{file.filename}"

    with open(path, "wb") as f:
        f.write(await file.read())

    # TODO: encrypt + push job to GPU cloud

    return {"uploaded": True}
