from common.database.db_connect import read_query
from common.models.user import User

def info(user: User):
    data = read_query(
        '''SELECT file_name FROM recordings
           WHERE user_id = %s''', (user.id,)
    )
    
    return {
        "id": user.id,
        "username": user.username,
        "recordings": data
    }