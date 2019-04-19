import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../../ducks/studentDataReducer'
import {syncStudentInfo} from '../../../ducks/editStudentReducer'
import StudentEditWindow from '../../shared/StudentEditor/StudentEditWindow/StudentEditWindow'
import StudentContainer from '../StudentContainer/StudentContainer'
import Nav from '../../shared/Nav/Nav'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
        }

    }
    componentDidMount(){
        this.props.requestAllStudents()
    }
    // componentDidUpdate(prevProps) {
    //     if(this.props.editStudent.editIsVisible !== prevProps.editStudent.editIsVisible){
    //         const {editIsVisible} = this.props.editStudent
    //         this.setState(
    //             {
    //                 editIsVisible
    //             }
    //         )
    //     }
    // }

    // handleChange = (e) => {
    //     const {name, value} = e.target
    //     this.setState({
    //         student: {
    //             ...this.state.student,
    //             [name]: value || ''
    //         }


    //     })
    // }



    

    render(){
        console.log(this.props)
        const {editIsVisible, student} = this.props
        const modal = <StudentEditWindow
                student={this.props.student}
                addStudent={this.addStudent}
                handleChange={this.handleChange}/>


        
        const students = this.props.studentData.students
        return (
            <div>
                <nav>
                    <Nav />
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
export default connect(mapState, {requestAllStudents, syncStudentInfo})(Home)