import requests
from bs4 import BeautifulSoup

def rashi():
    URL = "https://www.hamropatro.com/"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    time_div = soup.find_all("div", class_ = "time")
    date_div = soup.find_all("div", class_ = "date")
    event_div = soup.find_all("div", class_ = "events")
     
    for time in time_div:
       request_time = time.find("span")
       timevalue = request_time.text.strip()
       print(timevalue)

    for date in date_div:
       request_date = date.find("span", class_= "nep")
       datevalue = request_date.text.strip()
       print(datevalue)
    
rashi()
