import sys
f = open("/sys/class/power_supply/BAT0/capacity", "r")
charge = f.read()
f = open("/sys/class/power_supply/BAT0/status", "r")
status = f.read()
charge_print_1 = f"""
|███___________________________|
|███___________________________|
|███___________________________|                              {charge[0:1]}% Charge , {status.rstrip(status[-1])}
|███___________________________|
|███___________________________|
"""
charge_print_2 = f"""
|██████________________________|
|██████________________________|
|██████________________________|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|██████________________________|
|██████________________________|
"""
charge_print_3 = f"""
|█████████_____________________|
|█████████_____________________|
|█████████_____________________|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|█████████_____________________|
|█████████_____________________|
"""
charge_print_4 = f"""
|████████████__________________|
|████████████__________________|
|████████████__________________|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|████████████__________________|
|████████████__________________|
"""
charge_print_5 = f"""
|███████████████_______________|
|███████████████_______________|
|███████████████_______________|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|███████████████_______________|
|███████████████_______________|
"""
charge_print_6 = f"""
|██████████████████____________|
|██████████████████____________|
|██████████████████____________|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|██████████████████____________|
|██████████████████____________|
"""
charge_print_7 = f"""
|█████████████████████_________|
|█████████████████████_________|
|█████████████████████_________|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|█████████████████████_________|
|█████████████████████_________|
"""
charge_print_8 = f"""
|████████████████████████______|
|████████████████████████______|
|████████████████████████______|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|████████████████████████______|
|████████████████████████______|
"""
charge_print_9 = f"""
|███████████████████████████___|
|███████████████████████████___|
|███████████████████████████___|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|███████████████████████████___|
|███████████████████████████___|

"""
charge_print_10 = f"""
 ______________________________
|██████████████████████████████|
|██████████████████████████████|
|██████████████████████████████|                              {charge.rstrip(status[-1])}% Charge , {status.rstrip(status[-1])}
|██████████████████████████████|
|██████████████████████████████|
 ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
"""
if charge[0] == "1" and charge[1] == "0" and charge[2] == "0":
    print(charge_print_10)
else:
    if charge[0] == "1":
        print(charge_print_1)
    if charge[0] == "2":
        print(charge_print_2)
    if charge[0] == "3":
        print(charge_print_3)
    if charge[0] == "4":
        print(charge_print_4)
    if charge[0] == "5":
        print(charge_print_5)
    if charge[0] == "6":
        print(charge_print_6)
    if charge[0] == "7":
        print(charge_print_7)
    if charge[0] == "8":
        print(charge_print_8)
    if charge[0] == "9":
        print(charge_print_9)
