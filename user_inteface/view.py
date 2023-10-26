import tkinter as tk
import wave
from tkinter import filedialog
from common.recorder import Recorder


class UserInterface:

    def __init__(self, root, recorder: Recorder) -> None:
        self.root = root
        self.root.title = "Audio Recorder"
        self.file = ''
        self.recorder = recorder

    def setup_gui(self):
        self.canvas = tk.Canvas(self.root, bg='black', width=300, height=300, relief='raised')
        self.canvas.pack()

        self.label = tk.Label(self.root, foreground='white', bg='black', text='Audio Recorder')
        self.label.config(font=('ds-digital', 25, 'bold'))
        self.canvas.create_window(150, 40, window=self.label)

        self.start_button = tk.Button(
            self.canvas, text="START", command=self.start,
            bg='gray', fg='white', font=('ds-digital', 20, 'bold'))
        self.canvas.create_window(100, 150, window=self.start_button)

        self.stop_button = tk.Button(
            self.canvas, text="STOP", command=self.stop, state="disabled",
            bg='red', fg='white', font=('ds-digital', 20, 'bold'))
        self.canvas.create_window(200, 150, window=self.stop_button)

        self.save_button = tk.Button(
            self.canvas, text='Save', command=self.save_file,
            bg='lightblue', fg='white', font=('ds-digital', 20, 'bold'))
        self.canvas.create_window(150, 220, window=self.save_button)

    def start(self):
        self.start_button.config(state="disabled")
        self.stop_button.config(state="normal")
        self.recorder.start_recording()

    def stop(self):
        self.start_button.config(state="normal")
        self.stop_button.config(state="disabled")
        self.recorder.stop_recording()

    def save_file(self):
        self.file = filedialog.asksaveasfilename(defaultextension=".wav", filetypes=[("Wave files", "*.wav")])
        if self.recorder.frames:
            with wave.open(self.file, "wb") as file:
                file.setnchannels(self.recorder.channels)
                file.setsampwidth(self.recorder.port.get_sample_size(self.recorder.format))
                file.setframerate(self.recorder.rate)
                file.writeframes(b''.join(self.recorder.frames))