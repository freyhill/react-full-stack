import React from 'react';
import './index.scss'

class EasyTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            head: [],
            data: [],
            headKey: []
        }
    }
    componentWillReceiveProps(newProps) {
        const keys = [];
        if (newProps.head.length > 0) {
            newProps.head.forEach(item => {
                keys.push(item.key)
            })
        }
        this.setState({headKey: keys});
        this.setState({head: newProps.head, data: newProps.data});
    }
    componentWillUnmount() {
        this.setState({
            head: [],
            data: [],
            headKey: {}
        });
    }
    renderTableHead = () => {
        const list = this.state.head.map(item => {
            return <div className="head-title" key={item.key}>{item.label}</div>
        })
    return <div className="head flex">{list}</div>
    }
    renderTableBody = () =>{
        const {data, head, headKey} = this.state;
        if (head.length < 1 && data.length < 1) {
           return null
        }
        const list = data.map(dataItem => {
            return (
                <div key={dataItem.id} className="line flex">
                    {
                    headKey.map((key) => {
                        return <div key={dataItem[key]+Math.random()}>{dataItem[key]}</div>
                    })}
                </div>
            ) 
        })
        return <div className="list">{list}</div>
    }
    render () {
        if (this.state.head.length < 1) {
            return null;
        }
        return (
            <div className="table">
                {this.renderTableHead()}
                {this.renderTableBody()}
            </div>
        )
    }
}

export default EasyTable