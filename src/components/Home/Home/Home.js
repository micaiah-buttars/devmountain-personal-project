import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../../ducks/studentDataReducer'
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

    render(){
        const students = this.props.students
        return (
            <div>
                <h1>Home</h1>
                <button>Add student</button>
                {}
                <StudentEditWindow />

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

function mapState(reduxState){
    return {
        studentData: state.studentData,
        editStudent: state.editStudent
    }

}
export default connect(mapState, {requestAllStudents})(Home)