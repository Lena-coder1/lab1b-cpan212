const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.url}`); 

  let filePath = "";
  switch (req.url) {
    case "/":
      filePath = path.join(__dirname, "index.html");
      break;
    case "/About":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/Contact":
      filePath = path.join(__dirname, "contact.html");
      break;
    default:
      filePath = path.join(__dirname, "404.html");
      res.statusCode = 404;
      break;
  }

  res.setHeader("Content-Type", "text/html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("<h1>Server Error</h1>");
    } else {
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
