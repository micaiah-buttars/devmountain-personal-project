import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../ducks/reducer'
import StudentContainer from './StudentContainer/StudentContainer'

class Home extends Component {
    componentDidMount(){
        this.props.requestAllStudents()
    }

    render(){
        const students = this.props.students
        return (
            <div>
                <h1>Home</h1>
                <form>
                    <input type='text'/>
                    <input type='text'/>
                </form>
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

const mapState = (reduxState) => reduxState

export default connect(mapState, {requestAllStudents})(Home)