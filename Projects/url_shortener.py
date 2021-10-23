import pyperclip
import pyshorteners
from tkinter import *

root = Tk()
root.geometry("400x200")
root.title("URL shortener")
root.configure(bg="#F0E68C")
url = StringVar()
url_address = StringVar()

def urlshortener():
    urladdress = url.get()
    url_short = pyshorteners.Shortener().tinyurl.short(urladdress)
    url_address.set(url_short)

def copyurl():
    url_short = url_address.get()
    pyperclip.copy(url_short)

Label(root,text="My URL Shortener",font="poppins").pack(pady=10)
Entry(root,textvariable=url).pack(pady=5)
Button(root,text="Generate Short URL", command=urlshortener).pack(pady=7)
Entry(root,text=url_address).pack(pady=5)
Button(root,text="Copy URL", command=copyurl).pack(pady=5)

root.mainloop()