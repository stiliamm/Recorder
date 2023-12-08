from fastapi import APIRouter
from common.models.register import Register


regitser_router = APIRouter('/register', tags=['Register'])


@regitser_router.post('/users', tags=['Register'])
def register(register_data: Register):
    pass