//dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environment");
const data = require("./lib/data");

//app object - module scaffolding
const app = {};

//testing file system
// TODO

//create
// data.create(
//   "test",
//   "newFile",
//   { name: "Bangladesh", language: "Bangla" },
//   (err) => {
//     console.log(`error was`, err);
//   }
// );

//read
// data.read("test", "newFile", (err, data) => {
//   console.log(err, data);
// });
//update
// data.update(
//   "test",
//   "newFile",
//   { name: "England", language: "English" },
//   (err) => {
//     console.log(err);
//   }
// );
//delete
// data.delete("test", "newFile", (err) => {
//   console.log(err);
// });

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
