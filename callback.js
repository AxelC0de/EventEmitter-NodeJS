// Видео 2

// Get the events module

const EventEmitter = require("events");

// extend the class
class myEmitter extends EventEmitter { };

// get instance
let emitter = new myEmitter();

// predefined
// function listenForData(message) {
// 	console.log(`predefined function: ${message}`);
// }

// emitter.on('data', listenForData);

// emitter.on('data', function (a, b) {
// 	console.log(`anonymous function: ${b}, ${a}`);

// })

// emitter.on('data', function named(data) {
// 	console.log(`named anonymous: ${data.data}`);
// })

emitter.on('data', (a) => {
	console.dir(a, { depth: null, colors: true })
})

emitter.emit('data', { data: 'here is some data' })