/********************
 * @file: movie-list
 * @desc:电影列表
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import React from "react";
import MovieItem from "./movie-item";

export default class MovieList extends React.Component {
	onToggleClick = (index) => {
		this.props.onToggleClick(index);
	}
	render() {
		const movieList = this.props.movieList.map((item, index) => {
			return (
				<MovieItem
					key={index}
					movieItem={item}
					onDeleteClick={this.props.onDeleteClick.bind(this, item.id)}
					onAlterClick={this.props.onAlterClick.bind(this, item)}
				/>
			);
		});
		return (
			<div className="main todo column is-8">
				<ul className={`${movieList.length < 1 ? "" : "list-shadow"} todo-list`}>
					{movieList}
				</ul>
			</div >
		);
	}
}
