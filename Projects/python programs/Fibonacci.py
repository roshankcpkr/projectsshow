# Fibonacci Sequence
# Write a program that asks the user for a numerical input 'n'
# It will then print out the corresponding fibonacci sequence values from 0 to 'n'
# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

# Essentially, (excluding the first two numbers of the sequence) you can get the next number 
# of the sequence, by adding the last two numbers together


def fibonacci (n):
    index = 0
    fibcalc = 1
    lastnum1 = 0
    lastnum2 =  0

    for num in range(n + 1):
        print(f"{index}: {fibcalc}")
        index += 1
        lastnum1 = fibcalc
        


        

n = int(input("What number would you like to Fib?: "))
fibonacci(n)