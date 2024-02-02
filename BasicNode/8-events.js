
const eventEmitter = require("events");
const { EventEmitter } = require("stream");
// event emitter is a class

const emitter = new EventEmitter();
// emitter is an object (instance of eventEmitter class);



// register listener 
emitter.on("logging", ()=>{
    console.log("listener or logging")
})

// register an event
emitter.emit("logging");