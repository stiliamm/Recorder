from common.models.user import User
from services.login_service import _hash_password
from common.database.db_connect import insert_query


def create_user(user: User, password: str):
    curr_pass = _hash_password(password)

    user_id = insert_query(
        '''INSERT INTO users(username, first_name, last_name, password, avatar) 
           VALUES (%s, %s, %s, %s, %s)''', 
           (user.username, user.first_name, user.last_name, curr_pass, user.photo))
    
    return User(
        id=user_id,
        username=user.username,
        last_name=user.last_name,
        photo=user.photo
    )