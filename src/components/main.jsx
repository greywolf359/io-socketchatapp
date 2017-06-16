import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Chat from './chat';
import Home from './home';

export default class Main extends Component{

	render(){
		return(
			<div>
				<Route exact path = '/' component = {Home}/>
				<Route path = '/chat/:name' component = {Chat}/>
				
			</div>
		)
	}
}