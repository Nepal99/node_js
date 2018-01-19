var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();




var handler = function(){
	console.log("function is emitted");
}

eventEmitter.on('emitFunc', handler);
eventEmitter.emit('emitFunc');






var ringBell = function(){
	console.log('Ring Ring Ring');
	eventEmitter.on('greet', function(message){
		console.log(message);
	})
}

eventEmitter.on('doorOpen',ringBell);
eventEmitter.emit('doorOpen');
eventEmitter.emit('greet','Welcome');