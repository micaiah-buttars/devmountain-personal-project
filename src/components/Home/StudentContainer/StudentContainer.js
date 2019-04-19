import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './StudentContainer.css'

export default class StudentContainer extends Component {
    constructor(props){
        super(props)
        const {student_id, student_name, reminder_interval} = this.props
        this.state = {
            student_id,
            student_name,
            reminder_interval,

        }
    }

    invokeEditor = () => {
        this.props.invokeEditor(this.state)
    }
    render(){
        return (
            <div className='studentContainer'>
                <Link to={`/student/${this.state.student_id}`}>{this.state.student_name}</Link>
                <div className='icons'>
                    <span onClick={this.invokeEditor}>EDIT </span>
                    <span></span>
                </div>


            </div>


        )
    }

}