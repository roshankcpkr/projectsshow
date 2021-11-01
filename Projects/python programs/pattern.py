#pattern 1
num = int(input("Enter number of rows: "))
for x in range(1, num + 1):  # print 3 rows
    #part C
    for y in range(1, x + 1):  # 3 asterisks a row
        print()
        for n in range(1, y + 1):
            print('* ', end='')
    print()
"""
OUTPUT:
* 

* 
* * 

* 
* * 
* * * 

* 
* * 
* * * 
* * * * 

* 
* * 
* * * 
* * * * 
* * * * *

"""
#pattern 2
n = int(input("Enter number of rows: "))
space = n - 1
for i in range(0, n):
    for j in range(0, space):
        print(end=" ")
    space -= 1
    for k in range(0, i + 1):
        print("* ", end="")
    print()
"""
OUTPUT: 
    *
   * *
  * * *
 * * * *
* * * * *

"""
