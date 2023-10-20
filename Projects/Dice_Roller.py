import random

def roll_die():
    return random.randint(1,6)

want_to_roll = True
while want_to_roll:
    outcome = roll_die()
    print('\nDie Rolled, you got a ', outcome)
    want_to_roll = bool(int(input("\nWant to Roll again?\nEnter '0' to quit\nEnter '1' to roll again\n\n>>> ")))
