import React, {Component} from 'react';
import moment from 'moment';

export default function (props){

		
		
		return(
		<div className = "fixed-height overflow">

			<ul classNames = "list-group">
				{
					props.messages.map((data,i)=>{
						console.log('messagebox', data)
						return <li key = {i} className="list-group-item">{data.time} {data.name}: {data.msg}</li>
					})
				}
			</ul>
		</div>
		)
}