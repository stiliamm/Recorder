from fastapi import APIRouter, Header
from utils.auth import authenticate
from services.users_service import info


users_router = APIRouter(prefix='/users')


@users_router.get('/info', tags=["Users"])
def get_user_info(x_token: str = Header()):
    user = authenticate(x_token)
    if user:
        return info(user)