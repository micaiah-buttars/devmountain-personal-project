import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Student extends Component {
    render(){
        return (
            <div>
                <h1>Student</h1>
                <Link to='/home'>Back</Link>
            </div>
        )
    }
}