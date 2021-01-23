// Видео 1

// Get the events module

const EventEmitter = require('events')
class myEmitter extends EventEmitter { }

let emitter = new myEmitter();

emitter

	.on('message', function () {
		console.log('A message was emitted');

	})

	.on('message', function () {
		console.log('This is not the right message');
	})

	.on('event', function () {
		console.log('an event just occured');
	})

setInterval(() => {
	emitter.emit('event');
}, 1000);
