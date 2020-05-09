/********************
 * @file:student page
 * @author: leinov
 * @date: 2020-05
 ********************/

import React from 'react';
import store from '../../store'
import Input from '../../components/Input'
import {connect} from 'react-redux'

class Student extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      student: [],
      inputStudent: ''
    }
  }
  // store监听
  componentDidMount() {
  }
  
  // 输入
  onChange = (e) => {
    this.setState({[e.target.name]:  e.target.value});
  }
  // 提交
  onSubmit = () => {
    this.props.dispatch({
      type: 'student',
      data: {
        id: + new Date(),
        title: this.state.inputStudent
      }
    });
    console.log('props', this.props);
  }
  // 渲染学生
  studentsRender() {
    return this.props.student.student.map(item => {
         return (
           <div key={item.id}>{item.title}</div>
         )
     })
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h2>学生</h2>
        <Input 
          onChange={this.onChange} 
          name='inputStudent'
          onSubmit={this.onSubmit}
        />
        <div>{this.studentsRender()}</div>
      </>
    )
  }
}
const storeToprops = (state)=>{
  console.log('state', state);
  return {
    student: state.studentReducer
  }
}
export default connect(storeToprops)(Student);
