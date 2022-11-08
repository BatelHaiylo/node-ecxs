const httpServer = require("http").Server;

class SomeServer extends httpServer {
  constructor() {
    super()
    this.on("request", this.requestHandler);
    this.on("connection", this.connectionHandler);
    this.listen(8080);
  }
  requestHandler(request, response) {
    response.end("thank you for your request");
  }
  connectionHandler() {
    console.log("server connected");
  }
}

module.exports = {SomeServer}