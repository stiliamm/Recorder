from tkinter import Tk
from common.recorder import Recorder
from user_inteface.view import UserInterface



def main():
    root = Tk()
    recorder = Recorder()
    viewer = UserInterface(root, recorder)
    viewer.setup_gui()
    root.mainloop()

if __name__ == "__main__":
    main()