import os
from fastapi import APIRouter, File, Header, HTTPException, UploadFile, status
from fastapi.responses import FileResponse
from utils.auth import authenticate
from services.users_service import info, create_upload_avatar
from pathlib import Path


users_router = APIRouter(prefix='/users')


@users_router.get('/info', tags=["Users"])
def get_user_info(x_token: str = Header(default=None)):
    user = authenticate(x_token) if x_token else None
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Missing authentication token!')
    else:
        return info(user)


@users_router.get('/image', tags=["Users"])
def get_user_avatar(x_token: str = Header(default=None)):
    user = authenticate(x_token) if x_token else None
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Missing authentication token!')
    base_path = Path(f"./static/avatars/{user.username}")
    extensions = ('.png', '.jpg', '.jpeg')
    file_path = next(
        (base_path.with_suffix(ext) for ext in extensions if (
            base_path.with_suffix(ext)).is_file()), None)
    if not file_path:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail='File not found')
    return FileResponse(file_path)


@users_router.post('/upload_image', tags=["Users"])
def upload_profile_image(my_image: UploadFile = File(...), x_token: str = Header(default=None)):
    user = authenticate(x_token) if x_token else None
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Missing authentication token!')
    return create_upload_avatar(my_image, user)
