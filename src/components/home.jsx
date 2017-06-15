import React, {Component} from 'react';


export default class Home extends Component{
	render(){
		return(
			<div className = "vertical-center">
				<div className = "container">
					<div className = "row">
						<div className = "col-md-4 col-md-offset-4 well">
							<h2 className = "text-center">ChatSpace</h2>
							<h4 className = "text-center">Enter a Username:</h4>
								<div className = "form-group">
								<form action = "/chat">

								<label htmlFor = "name">Alias:</label>
								<div className = "input-group">
									<span className = "input-group-addon">
										<i className="glyphicon glyphicon-user"></i>
									</span>
									<input type = "text" name = "name" className = "form-control"/>
								</div>
								
									
								
								<div className = "form-group form-group-top">
									<input type = "submit" value = "Submit Name" className = "btn btn-primary btn-block"/>
								</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}