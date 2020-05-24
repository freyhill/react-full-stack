import React from 'react';
import {connect} from 'react-redux';
import {
    getStudentListAction,
    setStudentListAction
} from '../../actions/studentAction';
import './index.scss';
import {put, del, post} from '../../api/index';
import Title from '../../components/title';
class Student extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.getStudentList();
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
    renderStudentList =() => {
        const {studentList: st} = this.props;
        return st.map(item => {
            return (
                <div key={item.id} className="flex student-item">
                    <div className="student-name">{item.name}</div>
                    <div>
                        <button onClick={this.updateStudent.bind(this, item.id)}>修改</button>
                        <button onClick={this.deleteStudent.bind(this, item.id)}>删除</button>
                    </div>
                </div>
            )
        })
    }
    render () {
        console.log(this.props.studentList);
        return (
            <>
              <Title name="学生列表"></Title>
                    <button onClick={this.addStudent}>
                        新增学生
                    </button>
              <div>{this.renderStudentList()}</div>
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