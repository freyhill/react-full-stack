/********************
 * @file: input组件
 * @desc: input
 * @author: leinov
 * @date: 2019-03-03
 ********************/
import React from "react";
export default class Input extends React.Component {
	render() { 
        return (
            <div>
                <input 
                    className="input" 
                    type="text" 
                    name={this.props.name}
                    value={this.props.value}
                    placeholder={this.props.placeholder} 
                    onKeyDown={this.props.onKeyDown} 
                    onChange={this.props.vauleChange}
                />
            </div>
          );
    }
}