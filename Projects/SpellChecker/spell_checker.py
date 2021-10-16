#pip install textblob

#import module

from textblob import TextBlob

#type in the incorrect spelling

a = "eies"

print("original text : "+str(a))

b = TextBlob(a)

#obtain corrected spelling as an output 

print("corrected text : "+str(b.correct()))

