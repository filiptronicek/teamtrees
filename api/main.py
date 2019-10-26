import requests
import time
from bs4 import BeautifulSoup
import yagmail
from http.server import BaseHTTPRequestHandler

def HTTP_C(count):
	class handler(BaseHTTPRequestHandler):		
		self.send_response(200)
		self.send_header('Content-type', 'text/plain')
		self.end_headers()
		self.wfile.write(count.encode() + " trees planted!".encode())
		return

def do_GET(self):
	self.send_response(200)
	self.send_header('Content-type', 'text/plain')
	self.end_headers()
	return

	# Set the URL you want to webscrape from
	url = 'https://teamtrees.org'

	print("Making a request to",url)

	# Connect to the URL
	response = requests.get(url)
	print("Got index")

	emailIndex = 0

	# Parse HTML and save to BeautifulSoup object
	soup = BeautifulSoup(response.text, "html.parser")

	for cell in soup.select('#totalTrees'):
		print(cell["data-count"] + " trees planted!")
		HTTP_C(cell["data-count"])
		count = cell["data-count"]
		class handler(BaseHTTPRequestHandler):		
			self.wfile.write(count.encode() + " trees planted!".encode())
			return

