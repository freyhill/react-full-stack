
import React, { Component } from "react";
import './index.scss';
export default class Modal extends Component {
    render() {
      
        if(this.props.show){
            return (
                <div className="menu columns" >
                    <div className="modal-bac" onClick={this.props.closeModal}></div>
                    <div className="modal-main" >
                        {this.props.children}
                    </div>
                </div>
            );
        }else{
            return null;
        }
        
    }
}
