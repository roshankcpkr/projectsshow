import json
from difflib import get_close_matches

data=json.load(open("data.json"))

def translate(word):
    word=word.lower()
    if word in data:
        return data[word]
    elif word.title() in data:
        return data[word.title()]
    elif word.upper() in data:
        return data[word.upper()]
    elif len(get_close_matches(word,data.keys()))>0:
        print("Did you Mean %s" %get_close_matches(word,data.keys())[0])
        decide=input("Press y for Yes, n for NO:\t")
        if decide=='y':
            return data(get_close_matches(word,data.keys())[0])
        elif decide == "n":
            return("Word Not Found")
        else:
            print("Invalid Option")
    else:
            print("Word is Not in Dictionary")




word= input("Enter the Word to be Searched:\t")
output= translate(word)
if type(output)==list:
    i=1
    for item in output:
            print(str(i) +"\t"+ item)
            i=i+1
else:
            print(output)
