const fs = require("fs").promises;
const EventEmitter = require("events").EventEmitter;

class CreateFileEvent extends EventEmitter {
  constructor() {
    super();
    this.createEvent();
    this.activateEvent("file created successfully");
  }

  createEvent() {
    try{
      this.on("createFile", (txt)=>{this.createFileHandler(txt)});
    }catch(error){console.log(error)}
  }

  createFileHandler(txt){
      fs.writeFile("second-exc.txt", txt)
      .then(res => {return res})
      .then((txt) => console.log(txt, "file name:second-exc"));
  }
  activateEvent(txt) {
    this.emit("createFile", txt);
  }
}

module.exports = new CreateFileEvent()
