#Contoh program konversi suhu

def fahrenheit_to_celsius(number: int):
    awal = number - 32
    hasil = awal * 5/9
    return f"{round(hasil, 2)}°C"

def fahrenheit_to_reamur(number: int):
    awal = number - 32
    hasil = awal * 4/9
    return f"{round(hasil, 2)}°Ré"

pilih = input("1. Untuk konversi suhu F ke C\n2. Untuk konversi suhu F to R\n\n")
if pilih == 1:
    angka = int(input("Masukkkan Suhu Fahrenheit : "))
    print(fahrenheit_to_celsius(angka))
else:
    angka = int(input("Masukkkan Suhu Fahrenheit : "))
    print(fahrenheit_to_reamur(angka))
