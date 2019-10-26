import requests
from bs4 import BeautifulSoup
from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    #count = Get_Trees()
    self.wfile.write(str("Hello world").encode())
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

  for cell in soup.select('#totalTrees'):
    #print(cell["data-count"] + " trees planted!")
    return cell["data-count"]
