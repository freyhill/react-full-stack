/********************
 * @file:student page
 * @author: leinov
 * @date: 2020-05
 ********************/

import React from 'react';
import store from '../../store'
import Input from '../../components/Input'
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
    store.subscribe(() => {
      this.setState({
          student: store.getState().student
      })
    })
  }
  
  // 输入
  onChange = (e) => {
    this.setState({[e.target.name]:  e.target.value});
  }
  // 提交
  onSubmit = () => {
    store.dispatch({
      type: 'student',
      data: {
        id: + new Date(),
        title: this.state.inputStudent
      }
    })
  }
  // 渲染学生
  studentsRender() {
    return this.state.student.map(item => {
         return (
           <div key={item.id}>{item.title}</div>
         )
     })
  }

  render() {
    console.log(store.getState());
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
export default Student;
