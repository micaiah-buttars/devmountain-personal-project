import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {requestStudent} from '../../ducks/reducer'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            student_id: 0,
            student_name: '',
            reminder_interval: 0
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.requestStudent(id).then(res => {
            const {student_id, student_name, reminder_interval} = res.value[0]
            this.setState({
                student_id,
                student_name,
                reminder_interval
            })
        })
    }
    
    render(){

        return (
            <div>
                <h1>Student</h1>
                <h3>{this.state.student_name}</h3>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}


const mapState = (reduxState) => {
    return reduxState
}

export default connect(mapState, {requestStudent})(Student)