// const fs = require("fs");
// console.log("Hello World");

// console.log(fs);

// fs.appendFileSync("test.txt", "Ciao a tutti");

const http = require("http");

const PORT = 3100;
const HOST = "localhost";

// Creazione del web server
const server = http.createServer((req, res) => {
  // Semplice sistema di routing
  if (req.url === "/favicon.ico") {
    res.statusCode = 204;
    return res.end();
  }
  if (req.url === "/about-us") {
    res.statusCode = 200;
    return res.end("About Us");
  }
  if (req.url === "/" || req.url === "/index") {
    res.statusCode = 200;
    return res.end("Home Page");
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

// Attiviamo il web server
server.listen(PORT, HOST, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});

// Gestione errori web server
server.on("error", (err) => console.log(err));
