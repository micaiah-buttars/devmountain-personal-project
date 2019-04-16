import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './StudentContainer.css'

export default class StudentContainer extends Component {
    constructor(props){
        super(props)
        const {id, name, reminderInterval} = this.props
        this.state = {
            id,
            name,
            reminderInterval,

        }
    }
    render(){
        return (
            <Link to={`/student/${this.state.id}`}>
                        <div className='studentContainer'>
                <h1 className='studentName'>{this.state.name}</h1>
                <div className='icons'>
                    <span>Reminder Timer</span>
                </div>


            </div>
            </Link>

        )
    }

}