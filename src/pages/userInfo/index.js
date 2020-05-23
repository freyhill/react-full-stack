import React from 'react';
import {connect} from 'react-redux';
import {getUserInfoAction, setUserInfoAction} from '../../actions/userInfoAction';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getUserInfoAction('/data/wepylist.json',{},setUserInfoAction))
       
    }
    renderUserList = () => {
        const {baseInfo: {data = []}} = this.props;
        return data.map(item => {
            return (
            <div key={item.id}>{item.name}</div>
            )
        })
    }
    render () {
        return (
            <>
               {this.renderUserList()}
            </>
        )
    }
}
const stateToProps = (state) => {
    return {
        baseInfo: state.userInfoReducer.baseInfo
    }
}
export default connect(stateToProps)(UserInfo);