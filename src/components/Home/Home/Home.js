import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../../ducks/studentDataReducer'
import StudentEditWindow from '../StudentEditor/StudentEditWindow/StudentEditWindow'
import StudentContainer from '../StudentContainer/StudentContainer'
import Nav from '../../shared/Nav/Nav'

class Home extends Component {
    constructor(){
        super()
        this.state={
 
           
        }

    }
    componentDidMount(){
        this.props.requestAllStudents()
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            student: {
                ...this.state.student,
                [name]: value || ''
            }


        })
    }

    invokeEditor = async (student) => {
        const {student_id, student_name, reminder_interval} = student
        await this.setState({
            editIsVisible: true,
            student: {
                student_id,
                student_name,
                reminder_interval
            }

        })
        console.log(this.state)

    } 

    

    render(){
        const {editIsVisible, student} = this.state
        const modal = <StudentEditWindow
                student={this.state.student}
                addStudent={this.addStudent}
                handleChange={this.handleChange}/>


        
        const students = this.props.studentData.students
        return (
            <div>
                <nav>
                    <Nav />
                    <button>Add student</button>
                </nav>

                {this.state.editIsVisible && modal}


                {students.map((student) => 
                <StudentContainer
                    key={student.student_id}
                    student_id={student.student_id}
                    student_name={student.student_name} 
                    reminder_interval={student.reminder_interval}
                    invokeEditor={this.invokeEditor}
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
export default connect(mapState, {requestAllStudents})(Home)