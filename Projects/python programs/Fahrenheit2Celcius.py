def F2C_Converter(degrees_in_fahrenheit):
    degrees_in_celcius = (degrees_in_fahrenheit - 32) * 5/9
    print(F2C_Converter(),"C")       
    return degrees_in_celcius


try:
    F2C_Converter(float(input("What is the temperature in Fahrenheit?: ")))

except ValueError:
    print("This is not a number.")