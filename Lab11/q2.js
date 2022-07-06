// 2. Create a web server that's going to send a response of big image to any client that sends a request to your specified server:port. (Try to solve this in many different ways)

const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      fs.createReadStream(path.join(__dirname, "index.html")).pipe(res);
    } else if (url === "/file1" && method === "GET") {
      solution1(req, res);
    } else if (url === "/file2" && method === "GET") {
      solution2(req, res);
    } else if (url === "/file3" && method === "GET") {
      solution3(req, res);
    } else if (url === "/file4" && method === "GET") {
      solution4(req, res);
    }
  })
  .listen(4000);

// Solution 1
function solution1(req, res) {
  try {
    const file = fs.readFileSync(path.join(__dirname, "file.jpg"));
    res.end(file);
  } catch (error) {
    res.end("Read file error!!!");
  }
}

// Solution 2
function solution2(req, res) {
  fs.readFile(path.join(__dirname, "file.jpg"), (err, data) => {
    if (err) throw err;
    res.end(data);
  });
}

// Solution 3
function solution3(req, res) {
  const file = fs.createReadStream(path.join(__dirname, "file.jpg"));
  file.pipe(res);
  file.on("error", (error) => {
    console.log(error);
    res.end("Read file error!!!");
  });
}

// Solution 4
function solution4(req, res) {
  const file = fs.createReadStream(path.join(__dirname, "file.jpg"), {
    highWaterMark: 16 * 1024,
  });
  
  file.on('data', function(chunk) {
    res.write(chunk);
  });

  file.on('end', function() {
    res.end();
  })

  file.on("error", (error) => {
    console.log(error);
    res.end("Read file error!!!");
  });
}