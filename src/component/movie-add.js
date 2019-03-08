/********************
 * @file: movie-add
 * @desc: 输入框添加电影组件
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import React from "react";
import Input from 'component/input.js'
export default class MovieAdd extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="add column is-8">
				<Input 
					value={this.props.value}
					placeholder={this.props.placeholder}
					name={this.props.name}
					onKeyDown={this.props.onKeyDown} 
					onChange={this.props.onChange} 
					vauleChange={this.props.vauleChange} 
				/>
			</div>
		);
	}
}
