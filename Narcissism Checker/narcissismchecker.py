import http.server
import requests
import os
from urllib.parse import unquote, parse_qs

form = '''<!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

  <title>Narcissism Chekcker</title>
  
</head>
<div class="container">
  <form method="POST">
    <h2>Narcissism Checker</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="first">Check for <a href="https://en.wikipedia.org/wiki/Narcissistic_number">narcissism of a number</a></label>
          <input type="text" class="form-control" placeholder="Enter a number" name="value">
        </div>
      </div>
      <!--  col-md-6   -->

    </div>

    <button type="submit" class="btn btn-primary">Check Number</button>
  </form>
  <br><br>
</div>
<div class="container-fluid">
<footer>
<center><p>Made with <i class="fa fa-heart love" aria-hidden="true"></i> by <a href="https://twitter.com/VanessaOsuka">Vanessa</a></p></center>
<center>Fork on <a href="https://github.com/Ijebusoma/Algorithms/blob/master/narcisstic.py">Github</a></center>
</footer>
</div>
<html>
'''
def CheckNumber(value):
 total = []
 number = len(str(value))
 power = int(number)
 digits = [int(x) for x in str(value)]
 for i in digits:
    product = i ** power
    total.append(product)
    sumtotal = sum(total)
 if sumtotal == value:
   return True
 else:
    return False

class Shortener(http.server.BaseHTTPRequestHandler):

    def do_GET(self):
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(form.encode())

    def do_POST(self):
        # Decode the form data.
        length = int(self.headers.get('Content-length', 0))
        body = self.rfile.read(length).decode()
        params = parse_qs(body)
        value = params["value"][0]
        value = int(value)
        result = CheckNumber(value)
        
        if result == True:
           self.send_response(200)
           self.send_header('Content-type', 'text/plain; charset=utf-8')
           self.end_headers()
           self.wfile.write("The number '{}' is narcissitic".format(value).encode())
        else:
 
           self.send_response(200)
           self.send_header('Content-type', 'text/plain; charset=utf-8')
           self.end_headers()
           self.wfile.write("The number '{}' is not narcissitic".format(value).encode())
       


if __name__ == '__main__':
    server_address = ('', int(os.environ.get('PORT', '8000')))
    httpd = http.server.HTTPServer(server_address, Shortener)
    httpd.serve_forever()
