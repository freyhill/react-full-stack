/********************
 * @file:course page
 * @author: leinov
 * @date: 2020-05
 ********************/

import React from 'react';
import store from '../../store'
import Input from '../../components/Input'
import utils from '../../utils/utils'

class Course extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      course: [],
      inputCourse: ''
    }
  }
  // store监听
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
          course: store.getState().course
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
      type: 'course',
      data: {
        id: + new Date(),
        title: this.state.inputCourse,
        date: utils.getDate()
      }
    })
  }
  // 渲染课程
  coursesRender() {
    return this.state.course.map(item => {
         return (
         <div key={item.id}>{item.title}  {item.date}</div>
         )
     })
  }

  render() {
    return (
      <>
        <h2>课程</h2>
        <Input 
          onChange={this.onChange} 
          name="inputCourse"
          placeholder="请输入课程"
          onSubmit={this.onSubmit}
        />
        <div>{this.coursesRender()}</div>
      </>
    )
  }
}
export default Course;
