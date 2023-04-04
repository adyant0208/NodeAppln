const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let dateVal = today.getDate();
  let greeting = "It is still not morning";

  if (dateVal.getHours()>6 && dateVal.getHours()<12) {
    greeting = "Good Morning";
  }

  if (dateVal.getHours()>12 && dateVal.getHours()<16) {
    greeting = "Good Afternoon";
  }
  if (dateVal.getHours()>16 && dateVal.getHours()<21) {
    greeting = "Good Evening";
  }

  if (dateVal.getHours()>21 && dateVal.getHours()<24) {
    greeting = "Good Night";
  }
  res.end(`Hello, ${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);