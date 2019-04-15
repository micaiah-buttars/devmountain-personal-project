import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {requestAllStudents} from '../../ducks/reducer'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            retrieved: false
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        this.props.requestAllStudents()
    }
    

    render(){
        console.log(this.props)
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
                <Link to={`/student/${student.student_name}`} key={student.student_id}>
                <div>{student.student_name}</div>
                
                </Link>
                ) }
                


            </div>
        )
    }
}

const mapState = (reduxState) => reduxState

export default connect(mapState, {requestAllStudents})(Home)