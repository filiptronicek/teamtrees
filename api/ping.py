from http.server import BaseHTTPRequestHandler
import urllib.request

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain;charset=utf-8')
    self.end_headers()
    code = pingSite()
    self.wfile.write(str(code).encode())
    return
def pingSite():
    try:
        return (urllib.request.urlopen('https://teamtrees.org').getcode())
    except Exception as e:
        return (e)
