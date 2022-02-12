import React from 'react';
import {Header} from './Header';

export function Results(props){
	return(
		<div>
			<Header />
			{props.points}!!
		</div>
	)
}
