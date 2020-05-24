import React from 'react';
import {connect} from 'react-redux';
import {
    getUserInfoAction, 
    setUserInfoAction,
    updateUserInfoAction,
    setUpdateUserInfoAction
} from '../../actions/userInfoAction';
import {post} from '../../api/index';
import Title from '../../components/title';
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getUserInfoAction('/userInfo',{},setUserInfoAction))
       
    }
    updateUser = () => {
        const data = {name: 'leinov2'}
        this.props.dispatch(updateUserInfoAction('/userInfo', data, setUserInfoAction))
    }
    renderUserInfo = () => {
        const {userInfo} = this.props;
        return Object.keys(userInfo).map((user) => {
            return (
                <div key={user}>{user}: {userInfo[user]}</div>
            )
        })
    }

    render () {
        return (
            <>
                <Title name="用户信息" />
               {this.renderUserInfo()}
               <div onClick={this.updateUser}>修改用户</div>
            </>
        )
    }
}
const stateToProps = (state) => {
    return {
        userInfo: state.userInfoReducer.baseInfo
    }
}
export default connect(stateToProps)(UserInfo);