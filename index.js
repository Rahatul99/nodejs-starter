//dependencies
const http = require("http");

//app object - module scaffolding
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

//handle request and response
app.handleReqRes = (req, res) => {
  res.end("Hello world");
};

//start the server
app.createServer();
