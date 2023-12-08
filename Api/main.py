from fastapi import FastAPI
from routers.login_router import login_router
from routers.register_router import regitser_router
from routers.play_router import play_router
from routers.save_router import save_router
from routers.stop_router import stop_router
from routers.messages_router import messages_router

app = FastAPI()

app.include_router()



# def main():
#     root = Tk()
#     recorder = Recorder()
#     viewer = UserInterface(root, recorder)
#     viewer.setup_gui()
#     root.mainloop()

# if __name__ == "__main__":
#     main()