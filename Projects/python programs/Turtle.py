#!/usr/bin/env python
# coding: utf-8

# In[1]:


import turtle
c=('blue','red','cyan','green','yellow','pink')
t=turtle.Turtle()
screen=turtle.Screen()
screen.bgcolor=('black')
t.speed(25)
for i in range(150):
    
    t.color(c[i%6])
    t.forward(i*1.5)
    t.left(59)
    t.width(3)
    if i==150:
        break
    


# In[ ]:




