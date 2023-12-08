from fastapi import APIRouter

play_router = APIRouter('/play', tags=['Play'])


@play_router.put('/')
def play_audio():
    pass