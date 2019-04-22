import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../../ducks/studentDataReducer'
import {syncStudentInfo, unsyncStudentInfo} from '../../../ducks/editStudentReducer'
import StudentEditWindow from '../../shared/StudentEditor/StudentEditWindow/StudentEditWindow'
import StudentContainer from '../StudentContainer/StudentContainer'
import Nav from '../../shared/Nav/Nav'

class Home extends Component {

    componentDidMount(){
        this.props.requestAllStudents()
        this.props.unsyncStudentInfo()
    }

    render(){
        const modal = <StudentEditWindow
                student={this.props.student}
                addStudent={this.addStudent}
                handleChange={this.handleChange}/>


        
        const students = this.props.studentData.students
        return (
            <div>
                <nav>
                    <Nav pageTitle='Dashboard'/>
                </nav>

                {this.props.editStudent.editIsVisible && modal}


                {students.map((student) => 
                <StudentContainer
                    key={student.student_id}
                    student_id={student.student_id}
                    student_name={student.student_name} 
                    reminder_interval={student.reminder_interval}
                    syncStudentInfo={this.props.syncStudentInfo}
                />
                )}
                


            </div>
        )
    }
}

const mapState = (reduxState) => {
    return {
        studentData: reduxState.studentData,
        editStudent: reduxState.editStudent
    }

}
export default connect(mapState, {requestAllStudents, syncStudentInfo, unsyncStudentInfo})(Home)