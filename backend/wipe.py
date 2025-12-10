import os

def wipe_file(path):
    if os.path.exists(path):
        with open(path, "wb") as f:
            f.write(b'\x00' * 1024)
        os.remove(path)
