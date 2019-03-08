/********************************
 * @file: movie page
 * @desc: movie list
 * @author: leinov
 * @date:2019-03-02
 *******************************/

import React from "react";
import { connect } from "react-redux";
import MovieAdd from "component/movie-add";
import MovieList from "component/movie-list";
import Modal from 'component/modal/index.js'
import Input from 'component/input.js'
import {
	showAction,
	addAction,
	alterAction,
	deleteAction,
	movieAlterData,
	movieData
} from "store/action/movieAction";

class App extends React.PureComponent  {
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			text:"",
			value:"",
			addMoive:"",
		}
	}
	componentDidMount() {
		this.getData();
	}
	// 检查是否重新render
	/*shouldComponentUpdate(nextProps,nextState){
		if(something){
			return true;
		}
		return false;
	}*/
	// 显示弹窗
	showModal = (item) => {
		this.setState({ modalShow: true, id: item.id, text:item.title});
	}
	// 关闭显示弹窗
	closeModal = (e) => {
		this.setState({ modalShow: false });
	}
	// input文字
	onChange = (e) => {
		var value = e.currentTarget.value;
		if(!value){
			this.setState({ value: this.state.text });
		}else{
			this.setState({ value: value });
		}

	}
	// 获取数据
	getData() {
		this.props.dispatch(movieData({ url: "/api/getdata" }, showAction));
	}
	// 添加数据
	onKeyDown = (e) => {
		if (e.keyCode !== 13) {
			return;
		}
		const value = this.state.addMoive;
		console.log(value);
		var req = {
			method: "post",
			url: "/api/add",
			data: {
				title: value,
			}
		}
		this.props.dispatch(movieData(req, addAction));
		this.setState({value:""})
	}

	// 修改数据
	alterMovie = (e) => {
		this.closeModal(e);
		if(!this.state.alterName){
			return;
		}
		var req = {
			method: "put",
			url: "api/alter",
			data: {
				id: this.state.id,
				title: this.state.alterName
			}
		}
		this.props.dispatch(movieAlterData(req, alterAction));
	}
	// 删除某一项
	deleteMovie = (id) => {
		var req = {
			method: "delete",
			url: "api/delete",
			data: {
				id: id
			}
		};
		this.props.dispatch(movieData(req, deleteAction));
	}
	vauleChange=(e)=>{
		console.log(e.target.name,e.target.value);
		this.setState({[e.target.name]:  e.target.value});
	}
	render() {
		return (
			<div>
				<MovieAdd
					placeholder="请输入电影名称"
					vauleChange={this.vauleChange}
					name="addMoive"
					onChange={this.onChange}
					onKeyDown={this.onKeyDown}
					value={this.state.addMoive}
				/>
				<MovieList
					movieList={this.props.movieList}
					onDeleteClick={this.deleteMovie}
					onAlterClick={this.showModal}
				/>
				<Modal
					show={this.state.modalShow}
					closeModal={this.closeModal}
				>
					<ul className="flex" >
						<li className="flex1"><Input  placeholder={this.state.text} name="alterName" vauleChange={this.vauleChange} /></li>
						<li className="button is-success modify-btn" onClick={this.alterMovie}>确定修改</li>
					</ul>
				</Modal>
			</div>
		);
	}
}
const mapStatesToProps = (state) => ({
	movieList: state.movieList
});
export default connect(
	mapStatesToProps
)(App);

