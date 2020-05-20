/********************
 * @file:input框
 * @author: leinov
 * @date: 2020-05
 ********************/

import React from 'react';

class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      course: []
    }
  }
  render() {
    const {btnName = '确定', placeholder = '请输入内容', name = ''} = this.props;
    return (
      <div className="vc flex">
       <input 
        type="text" 
        onChange={this.props.onChange} 
        placeholder={placeholder}
        name={name}
        /> 
        <button onClick={this.props.onSubmit}>{btnName}</button>
      </div>
    )
  }
}
export default Input;
