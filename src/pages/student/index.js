import React from 'react';
import {connect} from 'react-redux';
import {
    getStudentListAction,
    setStudentListAction
} from '../../actions/studentAction';
import './index.scss';
import {put, del, post} from '../../api/index';
import Title from '../../components/title';
import EasyTable from './easy-talbe'
class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: []
        }
    }
    componentDidMount() {
        this.getStudentList();
        setTimeout(() => {
            this.setState({tableHead: [
                {
                    key: 'name',
                    label: '姓名'
                },
                {
                    key: 'age',
                    label: '年龄'
                },
                {
                    key: 'gender',
                    label: '性别'
                },
                {
                    key: 'name',
                    label: '姓名'
                },
                {
                    key: 'grade',
                    label: '班级'
                },
            ]})
        }, 1000)
    }
    // 获取学生列表
    getStudentList =()=> {
        this.props.dispatch(getStudentListAction('/student',{},setStudentListAction))
    }
    // 更新学生信息
    updateStudent = (id) => {
        put(`/student/${id}`, {name: 'hahah'}).then(res => {
            this.getStudentList();
        });
    }
    // 删除学生
    deleteStudent = (id) => {
        del(`/student/${id}`,{}).then(res => {
            this.getStudentList();
        });
    }
    // 新增学生
    addStudent = () => {
        const newStudent = {
            name: 'leinov2',
        }
        post('/student', newStudent).then(res => {
            console.log(111111);
            this.getStudentList();
        })
    }
   
    render () {
        console.log(this.props.studentList);
        return (
            <>
              <Title name="学生列表"></Title>
              <EasyTable
                data={this.props.studentList}
                head={this.state.tableHead}
                algin="center"
              />
            </>
        )
    }
}
const stateToProps = (state) => {
    return {
        studentList: state.studentReducer.studentList
    }
}
export default connect(stateToProps)(Student);