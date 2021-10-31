import requests
import json


def quoteGen():
	quote = requests.get('https://api.quotable.io/random')
	quoteContent = quote.json()['content']
	quoteAuthor = quote.json()['author']
	quoteMsg = '' + quoteContent + ' - ' + quoteAuthor
	return quoteMsg

print(quoteGen())
