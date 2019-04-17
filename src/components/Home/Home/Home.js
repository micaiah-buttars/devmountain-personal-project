import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../../ducks/studentDataReducer'
import {addStudent} from '../../../ducks/editStudentReducer'
import StudentEditWindow from '../StudentEditor/StudentEditWindow/StudentEditWindow'
import StudentContainer from '../StudentContainer/StudentContainer'

class Home extends Component {
    constructor(){
        super()
        this.state={
            editIsVisible: false
        }

    }
    componentDidMount(){
        this.props.requestAllStudents()
    }
    addStudent = (body) => {
        this.props.addStudent(body)
    }

    render(){
        const students = this.props.studentData.students
        return (
            <div>
                <h1>Home</h1>
                <button>Add student</button>
                <StudentEditWindow addStudent={this.addStudent}/>

                {/* Put default values in initial state */}
                {students.map((student) => 
                <StudentContainer
                    key={student.student_id}
                    id={student.student_id}
                    name={student.student_name} 
                    reminderInterval={student.reminder_interval}
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
export default connect(mapState, {requestAllStudents, addStudent})(Home)