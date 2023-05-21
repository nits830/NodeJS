// BASIC SETUP

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// on => Listens for specific event
// emit => emit an event

customEmitter.on('response',(name, id)=> {
    console.log(`Data received ${name}: ${id}`);
});

customEmitter.on("response", ()=> console.log("Some other logic"));

customEmitter.emit("response", "john", 34);







