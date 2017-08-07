import os
import time
import shutil
import pyautogui
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

shutil.copyfile(".\\resources\\android\icon\drawable-hdpi-icon.png", ".\platforms\\android\\res\mipmap-hdpi\icon.png")
shutil.copyfile(".\\resources\\android\icon\drawable-ldpi-icon.png", ".\platforms\\android\\res\mipmap-ldpi\icon.png")
shutil.copyfile(".\\resources\\android\icon\drawable-mdpi-icon.png", ".\platforms\\android\\res\mipmap-mdpi\icon.png")
shutil.copyfile(".\\resources\\android\icon\drawable-xhdpi-icon.png", ".\platforms\\android\\res\mipmap-xhdpi\icon.png")
shutil.copyfile(".\\resources\\android\splash\drawable-land-hdpi-screen.png", ".\platforms\\android\\res\drawable-land-hdpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-land-ldpi-screen.png", ".\platforms\\android\\res\drawable-land-ldpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-land-mdpi-screen.png", ".\platforms\\android\\res\drawable-land-mdpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-land-xhdpi-screen.png", ".\platforms\\android\\res\drawable-land-xhdpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-port-hdpi-screen.png", ".\platforms\\android\\res\drawable-port-hdpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-port-ldpi-screen.png", ".\platforms\\android\\res\drawable-port-ldpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-port-mdpi-screen.png", ".\platforms\\android\\res\drawable-port-mdpi\screen.png")
shutil.copyfile(".\\resources\\android\splash\drawable-port-xhdpi-screen.png", ".\platforms\\android\\res\drawable-port-xhdpi\screen.png")


