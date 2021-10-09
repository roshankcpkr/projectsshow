# Program to sort alphabetically the words form a string provided by the user

my_str = "In Punjab the power tussle is far from over even after the Congress removed Capt Amarinder Singh from the chief minister post While the Congress is trying to set its house in order in the run-up to next year assembly election a viral video of Navjot Singh Sidhu has made it clear that the path ahead for Punjab Congress is not going to be smooth The video is from Zirakpur of Punjab from where Sidhu started the party march towards Lakhimpur Kheri in Uttar Pradesh In the video Sidhu was seen waiting for CM Charanjit Singh Channi with his close aide and cabinet minister Pargat Singh and Punjab Congress working president Sukhwinder Singh Danny Sidhu was upset because he was made to wait for CM Channi before starting the protest march Sidhu was heard saying that they were waiting for Channi for so long"

# To take input from the user
my_str = input("Enter a string:")

# breakdown the string into a list of words
words = [word.lower() for word in my_str.split()]

# sort the list
words.sort()

# display the sorted words

print("The sorted words are:")
for word in words:
    print(word)
