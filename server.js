const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
  console.log(`Incoming request: ${req.url}`); 

  
  switch (req.url) {
    case "/":
      filePath = fs.readfile("index.html" , (err,data)=>{
        if(err) {
          console.log(error);
        }
        else
        {
          console.logd(data);
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      };
      break;
    case "/About":
      filePath = fs.readfile("about.html" , (err,data)=>{
        if(err) {
          console.log(error);
        }
        else
        {
          console.logd(data);
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      };
      break;
    case "/Contact":
      filePath = fs.readfile("contact.html" , (err,data)=>{
        if(err) {
          console.log(error);
        }
        else
        {
          console.logd(data);
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        }
      };
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html')
      res.end(<h1> page doesnt exist<h1/>)
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

