import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {requestStudent} from '../../ducks/studentDataReducer'
import {toggleEditor, addStudent, updateStudent} from '../../ducks/editStudentReducer'
import StudentEditWindow from '../shared/StudentEditor/StudentEditWindow/StudentEditWindow'

import Nav from '../shared/Nav/Nav'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            student_id: 0,
            student_name: '',
            reminder_interval: 0,
            selectedOption: ''
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
    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    
    render(){
        console.log(this.props)
        const {student_id, student_name, reminder_interval} = this.props.studentData.students[0]
        const student = {
            student_id,
            student_name,
            reminder_interval
        }
        const modal = <StudentEditWindow
                student={student}
                addStudent={this.addStudent}
                handleChange={this.handleChange}/>


        return (
            <div>
                <Nav />
                {this.props.editStudent.editIsVisible && modal}

                <h3>{this.state.student_name}</h3>


                <div className='behaviorReportContainer'>
                    <form>
                        <input type='radio' name='behavior' value='negative'
                        checked={this.state.selectedOption === 'negative'}
                        onChange={this.handleOptionChange}/>

                        <input type='radio' name='behavior' value='positive'
                        checked={this.state.selectedOption === 'positive'}
                        onChange={this.handleOptionChange}/>
                        
                        {this.state.selectedOption === 'negative' ? (
                            <select>
                                <option value=''>Non-compliance</option>
                                <option value=''>Eloping</option>
                                <option value=''>Aggression</option>
                                <option value=''>Inappropriate Verbal</option>
                            </select>
                            ) : (
                            <select>
                                <option value=''>Following Directions</option>
                                <option value=''>Asking for a Break</option>
                                <option value=''>Asking for Help</option>
                                <option value=''>Earned Break</option>
                            </select>
                            )}
                            


                    </form>

                </div>

            <div>

                <Link to='/'>Back</Link>
            </div>
            </div>
        )
    }
}


const mapState = (reduxState) => {
    return reduxState
}

export default connect(mapState, {requestStudent})(Student)