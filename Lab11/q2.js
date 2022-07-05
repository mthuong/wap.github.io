// 2. Create a web server that's going to send a response of big image to any client that sends a request to your specified server:port. (Try to solve this in many different ways)

const http = require("http");
const fs = require("fs");
const path = require('path');

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
    } else if (url === "/file" && method === "GET") {
      try {
        const file = fs.readFileSync(path.join(__dirname, 'file.jpg'));
        res.end(file);
      } catch (error) {
        res.end('Read file error!!!');
      }
    }
  })
  .listen(4000);
