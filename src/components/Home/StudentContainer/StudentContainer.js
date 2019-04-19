import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './StudentContainer.css'

export default class StudentContainer extends Component {
    constructor(props){
        super(props)
        const {student_id, student_name, reminder_interval} = this.props
        this.state = {
            student: {
                student_id,
                student_name,
                reminder_interval
            }
        }
    }

    handleSync = () => {
        this.props.syncStudentInfo(this.state.student)
    }
    render(){
        console.log(this.props)
        return (
            <div className='studentContainer'>
                <Link to={`/student/${this.state.student.student_id}`}>
                <div onClick={this.handleSync}>
                {this.state.student.student_name}
                </div>
                </Link>
                <div className='icons'>
                    <span onClick={this.invokeEditor}>EDIT </span>
                    <span></span>
                </div>


            </div>


        )
    }

}