const http = require("http");

// Dummy web server to satisfy Scalingo deployment (which needs to
// start  a "web" process)

http.createServer((_, res) => res.end("OK")).listen(process.env.PORT);
