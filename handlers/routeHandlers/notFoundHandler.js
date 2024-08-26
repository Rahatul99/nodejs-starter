const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your url was not found",
  });
};

module.exports = handler;
