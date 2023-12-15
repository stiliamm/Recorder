from fastapi import APIRouter, Header, HTTPException, status
from utils.auth import authenticate
from services.users_service import info


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
    