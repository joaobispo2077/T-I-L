import pyautogui
import time
import math

def shake_mouse(duration=5, radius=10):
    end_time = time.time() + duration
    while time.time() < end_time:
        for angle in range(0, 360, 10):
            x = radius * math.cos(math.radians(angle))
            y = radius * math.sin(math.radians(angle))
            pyautogui.moveRel(x, y)
            time.sleep(0.01)

# Shake the mouse for 5 seconds
shake_mouse(duration=60 * 60)
