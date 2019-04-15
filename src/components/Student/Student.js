import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Student extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const name = this.props.match.params.name
        return (
            <div>
                <h1>Student</h1>
                <h3>{name}</h3>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}