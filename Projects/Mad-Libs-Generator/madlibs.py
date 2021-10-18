# MAD LIBS GENERATOR
loop=1
while (loop<10 ):
    #Getting all inputs from the user
    noun=input("Enter a noun:")
    p_noun=input("Enter a plural noun:")
    noun2=input("Enter another noun:")
    place=input("Enter a place:")
    adjective=input("Enter an adjective(describing word):")
    noun3=input("Enter another noun:")

    #Displays the story
    print("-----------------------------------------------")
    print("Be your own kind of ",noun,"-footed ",p_noun)
    print("For a duck may be somebody's",noun2)
    print("Be kind to your",noun2,"in ",place)
    print("where the weather is always",adjective,".")
    print()
    print("You may think that is the",noun3,",")
    print("Well it is.")
    print("------------------------------------------------")

    loop=loop+1