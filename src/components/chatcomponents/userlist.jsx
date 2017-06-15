import React, {Component} from 'react';

export default class UserList extends Component{
	renderUserList(users){
		return users.map((user, i)=>{
				let {name} = user;
			console.log('user in map', name)
			return <li key = {i} className="list-group-item">{user}</li>
		})
	}

	render(){
		console.log("userlist render", this.props.users);
		return(
			<div>
				
				<div className = "fixed-height overflow">
					
					<ul className = "list-group">
						{this.renderUserList(this.props.users)}
					</ul>
			</div>
		</div>
		)
	}
}

React.proptTypes = {
	users: React.PropTypes.array.isRequired
}