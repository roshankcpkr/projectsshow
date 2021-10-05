from tkinter import *
from tkinter import messagebox,filedialog

root=Tk()
root.title("Notepad")
root.geometry("800x600+100+100")
root.resizable(False,False)
root.config(bg="#48D1CC")

def ope():
    op1=filedialog.askopenfile(title="Select File",filetypes=(("Text File",".txt"),))
    if op1!=None:
        fname.config(text="FILENAME - "+ str(op1.name.split('/')[-1]))
        store.set(op1.name)
        for i in op1:
            area.insert(END,str(i))
        op1.close()


def save_as():
    op=filedialog.asksaveasfile(title="Save As",filetypes=(("Text File",".txt"),))
    op.write(area.get('1.0', END,))
    op.close()
    messagebox.showinfo("Saved", "File has been saved")

def save():

    if store.get()=="":
        save_as()
    else:
        op=open(store.get(),"w")
        op.write(area.get('1.0',END,))
        op.close()
        messagebox.showinfo("Saved", "File has been saved")

File=Menu(root)



file=Menu(File,tearoff=0)

file.add_command(label="Open",command=ope)
file.add_command(label="Save",command=save)
file.add_command(label="Save As",command=save_as)

File.add_cascade(label="File",menu=file)



root.config(menu=File)


buo=Button(root,text="Open",font=("arial",15),command=ope).place(x=20,y=50,width=80)
bus=Button(root,text="Save",font=("arial",15),command=save).place(x=120,y=50,width=80)
busa=Button(root,text="Save As",font=("arial",15),command=save_as).place(x=220,y=50,width=80)

store=StringVar()

fname=Label(root,text="FILENAME",font=("arial",20))
fname.place(x=20,y=100)


area=Text(root,font=("times new roman",15))
area.place(x=20,y=150,width=600,height=390)

root.mainloop()