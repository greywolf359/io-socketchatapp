import React, {Component} from 'react';

class Input extends Component{
	constructor(props){
		super(props);
		var {sendData} = this.props.sendData;
	}

	submitText(e){
		e.preventDefault();
		e.stopPropagation();
		let element = document.getElementById('text');
		let value = element.value;
		if(value){
			this.props.sendData(value);
			element.value = '';
		}
	}

	render(){
		return(
			<div className = "">
				<form onSubmit = {(e)=>{this.submitText(e)}}>
					<div className = "form-group">
						<input type = "text" id = "text" className = "form-control form-control-width-modified"></input>
						<input type = "submit" value = "Submit" className = "btn btn-primary btn-margin-left"/>
					</div>
					
				</form>
			</div>
		);
	}
}

Input.propTypes = {
	sendData: React.PropTypes.func.isRequired
}

export default Input;