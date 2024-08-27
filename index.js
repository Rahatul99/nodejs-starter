//dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environment");

//app object - module scaffolding
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`environment variable is ${process.env.NODE_ENV}`);
    console.log(`listening to port ${environment.port}`);
  });
};

app.handleReqRes = handleReqRes;
//start the server
app.createServer();
