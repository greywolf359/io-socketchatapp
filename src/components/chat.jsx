import React, {Component} from 'react';
import {Link} from 'react-router';
var io = require('socket.io-client');
import MessageBox from './chatcomponents/messagebox';
import Input from './chatcomponents/input';
import UserList from './chatcomponents/userlist';
import moment from 'moment';

var socket = io.connect('https://pacific-waters-12446.herokuapp.com' + process.env.PORT);

export default class Chat extends Component{

	constructor(props){
		super(props);
		this.state = {messages: [], showChat: false, userList: []};
		socket.on("connect", ()=>{
			console.log("client connected...")
		})
	}
	
	componentDidMount(){
		//get the users name from the query string
		let path = window.location.search;
		let name = path.split('=')[1];

		//send the user name to the server
		socket.emit('joinRoom', name);

		socket.on('users',(users)=>{
			console.log("UsersList", users);
			this.setState({userList: users});
		})

		console.log('name', name);
		//client recieves message from server
		socket.on('message', (data)=>{
			console.log('data received by client', data)
			//remember, data here is an object and the msg is a buffer
			//let {msg, name} = data;
			//received from socket io and sent to Chat components state
			this.setMessageState(data);
		});
		
	}
	
	//any messages sent by server are pushed into an array and put into state
	setMessageState(data){
		var {messages} = this.state;

		data.time = moment().format('hh:mm:ss');
		//data is {name, msg} so messages would be [{name, msg}]
		messages.push(data);
		this.setState({messages});
	}

	sendData(data){
		console.log('send dta', data);

		socket.emit('message', {msg: data});
	}

	updateComponentState(){
		this.setState({showChat: true});
	}


	renderNameInput(){
		return(
			<form action = {this.updateComponentState()}>
				<input type = "text" name = "name"/>
				<input type = "submit" value = "submit"/>
			</form>
		)
	}

	renderChat(){

		return (
			<div className = "container well container-width">
				<div className = "row">
					<div className = "col-md-12">
						<h2 className="text-center">Chat Application</h2>
					</div>
				</div>
				
				<div className = "row">
					<div className = "col-md-8">
						<MessageBox messages = {this.state.messages}/>
					</div>
					<div className = "col-md-2 col-md-offset-1">
						<UserList users = {this.state.userList}/>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-9">
						<Input sendData = {this.sendData}/>
					</div>
				</div>
			</div>
			
		)
	}

	render(){
		return this.renderChat();
	}
}

/*
you need to render this component in two state, either prompting for a username
or to display the chat window

<form>
				<input type = "text" name = "name"/>
				<input type = "submit" value = "submit"/>
			</form>
*/

/*

if showChat = false then display textName prompt
figure out how to get the val of textName from box and into app
set showChat to true
 else
show chat window.

would showChat revert to false if the user closed window and came back later?
*/