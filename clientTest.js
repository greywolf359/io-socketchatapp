var io = require('socket.io-client');

var socket = io.connect('http://localhost:4000');


socket.on('connect', ()=>{
	console.log('client connected...');
})

//message is received and sent to process
socket.on('message', (data)=>{
	process.stdout(data);
})

//input is taken from user and sent to server
process.stdin.on('data',(data)=>{
	socket.emit('message', {msg:data});
})

socket.on('error', (err)=>{
	console.log('error: ', err);
})