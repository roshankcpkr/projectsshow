def palindrome(word):
    list1 = []
    list2 = []
    list3 = []
    list1 = list(word)
    print(list1)
    list2 = list(word)
    print(list2)
    list3 = list2[::-1]
    print(list3)

    if list3 == list1:
        print("True")
        return True
    elif list3 != list1:
        print("False")
        return False




word = input("What word do you want to test?: ")
palindrome(word)