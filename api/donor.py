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

  # Connect to the URL
  response = requests.get(url)
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

          donation
          return donationTimeNowAndDonationOnWebsiteDifference
          #return donation.getText()

