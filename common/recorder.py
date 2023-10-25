import pyaudio
import wave
import keyboard
import threading
from common.driver import AudioDriver


    
class Recorder(AudioDriver):
    """
    Record audio to a [.wav] file in MONO | format 16bit\n
    Methods:
    - __init__(): Initializes a new Recorder instance with default audio parameters.
    - record(): Starts recording audio when 'r' key is pressed, and stops when 'SPACE' key is pressed.
    - recording_loop(): Background thread to handle audio recording.
    - start_recording(e): Callback to start audio recording when 'r' key is pressed.
    - stop_recording(e): Callback to stop audio recording when 'SPACE' key is pressed.
    """

    def __init__(self) -> None:
        super().__init__()

        self.port = pyaudio.PyAudio()
        self.stream = self.port.open(
            format=self.format,
            channels=self.channels,
            rate=self.rate,
            input=True,
            frames_per_buffer=self.chunk
        )
        self.frames = []
        self.file = ""
        self.recording = False

    def record(self):
        keyboard.on_press_key("r", self.start_recording)
        keyboard.on_press_key(" ", self.stop_recording)
        
        recording_thread = threading.Thread(target=self.recording_loop)
        
        try:
            print("Press 'r' to start recording.")
            keyboard.wait('r')
            recording_thread.start()
            recording_thread.join()
        except KeyboardInterrupt:
            pass
        
        finally:
            self.metadata()
            keyboard.unhook_all()
            self.stream.stop_stream()
            self.stream.close()
            self.port.terminate()

            if self.frames:
                with wave.open(self.file, "wb") as file:
                    file.setnchannels(self.channels)
                    file.setsampwidth(self.port.get_sample_size(self.format))
                    file.setframerate(self.rate)
                    file.writeframes(b''.join(self.frames))

    def recording_loop(self):
        if self.recording:
            while True:
                data = self.stream.read(self.chunk)    
                self.frames.append(data)
                if not self.recording:
                    break
        
    def start_recording(self, e):
        print("Recording... Press SPACEBAR to stop.")
        self.recording = True

    def stop_recording(self, e):
        if self.recording:
            print("Stopping...")
            self.recording = False

    def metadata(self):
        print("Recording finished.")
        self.file = input(f"Record name(add .wav at end): ")