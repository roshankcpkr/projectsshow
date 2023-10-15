def is_palindrome(s):
    s = s.lower()  # Convert the string to lowercase to make it case-insensitive.
    s = s.replace(" ", "")  # Remove spaces from the string.
    return s == s[::-1]

want_to_continue = True
while want_to_continue == True:
    input_string = input("\nEnter a string: ")
    if is_palindrome(input_string):
        print("\nIt's a palindrome!\n")
    else:
        print("\nIt's not a palindrome.\n")
    want_to_continue = bool(int(input("What do you want to do now?\nEnter '0' if you want to exit\nEnter '1' if you want to check another string\n\n>>> ")))
