/********************
 * @file:title
 * @author: leinov
 * @date: 2020-05
 ********************/

import React from 'react';
export default function Title(props) {
    
    return (
        <h2 className='title' style={props.style}>{props.name}</h2>
    )
}
Title.defaultProps = {
    name: '标题',
    style: {
        borderLeft: "5px solid #fc6472 ",
        paddingLeft: "10px",
        color: '#fc6472 '
    }
      
}