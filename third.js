const EventEmitter = require('events').EventEmitter;
const promisesFS = require('fs').promises

class Student extends EventEmitter{
    constructor(name,score,subject,bolValue){
        super()
        this.name = name ;
        this.score = score  ;
        this.subject = subject ;
        this.bolValue = bolValue;

        this.isPassTest(bolValue)
    }

    writeToFile(){
        try{
            promisesFS.appendFile('student-data.txt',`${this.name}, ${this.score}, ${this.subject}`)
            .then(this.activateEvent())
        }catch(error){console.log(error)}
    }

    isPassTest(bolValue){
        super.on('tookAtest',()=>{this.tookATestHandler(bolValue)})
    }

    tookATestHandler(bolValue){
        return bolValue==true? console.log("student passed"): console.log("student failed");
    }

    activateEvent(){
        super.emit('tookAtest')
    }
}
module.exports = {Student}