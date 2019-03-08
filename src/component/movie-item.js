/********************
 * @file: movie-item
 * @desc:电影项
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import React from "react";
import pic from '../pages/images.png';
export default class MovieItem extends React.Component {
	render() {
		return (
			<li className="todo-item flex v-center">
				<img className='movie-icon' src={pic} />
				<span className={`flex1 toto-text` } onClick={this.props.onClick}>{this.props.movieItem.title}</span>
				<span className={`flex1 toto-text  is-four-fifths`}>{this.props.movieItem.time}</span>
				<span className={` toto-text  is-four-fifths`} onClick={this.props.onAlterClick}><span className="button is-primary  is-small">修改</span></span>
				<span className={`toto-text v-center` } onClick={this.props.onDeleteClick}><span className="button  is-danger is-small ">删除</span></span>
			</li>
		);
	}
}
