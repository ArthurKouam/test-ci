import { createServer } from "http";
import isOdd from 'is-odd'; 


const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const num = req.url ? parseInt(req.url.slice(1)) : NaN;
  if (!isNaN(num)) {
    res.write(`Is ${num} odd? ${isOdd(num)}\n`);
  }

  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});