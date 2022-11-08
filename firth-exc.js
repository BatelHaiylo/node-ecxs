const HttpServer = require("http").Server;
const fsPromise = require("fs").promises;

class SomeServer extends HttpServer {
  constructor() {
    super();
    this.on("request", this.requestHandler);
    this.listen(9090);
  }
  requestHandler(request, response) {
    try {
      fsPromise.readFile("./test.txt",{encoding:'utf8'}).then((data) => {
        response.end(data);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { SomeServer };