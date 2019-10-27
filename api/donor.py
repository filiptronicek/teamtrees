import requests
from bs4 import BeautifulSoup
from http.server import BaseHTTPRequestHandler
import time,datetime
import json

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'application/json; charset=utf-8')
    self.end_headers()
    count = Get_Trees()
    self.wfile.write(str(count).encode())
    return

def Get_Trees():

  # Set the URL you want to webscrape from
  url = 'https://teamtrees.org'

 # print("Making a request to",url)
  try:
      response = requests.get(url)
  except requests.exceptions.Timeout:
    return "Error"
  except requests.exceptions.TooManyRedirects:
    return "Error"
  except requests.exceptions.RequestException as e:
    return "Error :"+e
  # Connect to the URL
  print("Got index")

  # Parse HTML and save to BeautifulSoup object
  soup = BeautifulSoup(response.text, "html.parser")
  for cell in soup.select('#recent-donations'):
      for donation in cell.select(".media"):
          donationTimeArray = donation.getText().split("T")
          donationTime = donationTimeArray[-1]
          donationTimeDifferenceArray = donationTime.split(":")
          donationTimeDifference = int(donationTimeDifferenceArray[0]) * 3600
          donationTimeDifference += int(donationTimeDifferenceArray[1]) * 60
          donationTimeDifference += int(donationTimeDifferenceArray[2].split(".")[0])
          timeObj = datetime.datetime.now()
          timeNowInUTC = (timeObj.hour * 3600) + (timeObj.minute * 60) + (timeObj.second)
          donationTimeNowAndDonationOnWebsiteDifference = timeNowInUTC - donationTimeDifference

          donationTextArray = donation.getText().split("\\n")
          donationDict = {'name':donationTextArray[0],'tree_count':donationTextArray[1],'time': donationTextArray[2],'message': donationTextArray[3]}
          jsonDonationDictionary = json.dumps(donationDict)
          #return donationTimeNowAndDonationOnWebsiteDifference
          return jsonDonationDictionary

