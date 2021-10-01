def longest_word(lst):
    lst=[]
    max=len(lst[0])

    for i in lst:
        if len(lst[i])>max:
            max=len(lst[i])
    return max

print(longest_word(['PHP','Exercises','Backend']))

