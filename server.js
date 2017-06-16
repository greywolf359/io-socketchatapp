const express = require('express');
const app = express();
const server = require('https').Server(app);
const io = require('socket.io')(server);
const moment = require('moment');
const PORT  = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));

var clientInfo = {};

io.on('connection', (socket)=>{
	var users = [];
	//users.push(socket);
	clientInfo[socket.id];
	console.log("connection found...");
	socket.on('message', (data)=>{
		//data {msg: 'stringvalue'}

		console.log('server received: ', data.msg.toString());
		//message is dispatched to all users
		io.emit('message', {name: clientInfo[socket.id], msg: data.msg, time: moment()});
	})

	socket.on('joinRoom', (name = 'anon')=>{
		//assign name to users socket.id...name here is {name}
		clientInfo[socket.id]= name;
		//users[socket.id] = name;
		//put the users info into an array
		users.push(name);

		//send the client a list of current users to display in the userList component
		io.emit('users', users);

		io.emit('message', {
			time: moment(),
			msg: `${name} has joined the room`
		})

		console.log("this is whats in clientInfo", clientInfo);
		console.log('this is whats in users', users)

	})

	//automated reponse
	socket.emit("message", {msg: 'welcome'});

	socket.on('disconnect', ()=>{
		console.log('clientinfo', clientInfo)
		console.log("name", clientInfo[socket.id]);
		console.log(`${clientInfo[socket.id]} has disconnected.`, users.length);
		delete clientInfo[socket.id];
		
	})

})

server.listen(PORT, ()=>{
	console.log("Express server listening on ", PORT)
})