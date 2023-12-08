from fastapi import APIRouter

messages_router = APIRouter('/messages', tags=["Messages"])


@messages_router.get('/')
def get_messages():
    pass
