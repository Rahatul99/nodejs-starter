const { StringDecoder } = require("string_decoder"); //stringDecoder is a class
const url = require("url");
//module scaffolding
const handler = {};

//handle request and response
handler.handleReqRes = (req, res) => {
  //request handling
  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/*|\/*$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);

    //response handle
    res.end("Hello world hi");
  });
};

module.exports = handler;
