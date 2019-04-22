import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {requestStudent} from '../../ducks/studentDataReducer'
import {unsyncStudentInfo} from '../../ducks/editStudentReducer'
import StudentEditWindow from '../shared/StudentEditor/StudentEditWindow/StudentEditWindow'

import Nav from '../shared/Nav/Nav'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            student_id: 0,
            student_name: '',
            reminder_interval: 0,
            behaviors: [''],
            selectedOption: 'on task'
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.requestStudent(id).then(res => {
            const {student_id, student_name, reminder_interval, behaviors} = res.value[0]
            this.setState({
                student_id,
                student_name,
                reminder_interval,
                behaviors
            })
        })
    }
    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    
    render(){
        console.log('PROPS', this.props)
        const {student_id, student_name, reminder_interval, behaviors} = this.props.studentData.students[0]
        const student = {
            student_id,
            student_name,
            reminder_interval,
            behaviors
        }
        const modal = <StudentEditWindow
                student={student}
                addStudent={this.addStudent}
                handleChange={this.handleChange}/>

        const discouraged = (student.behaviors = this.state.behaviors)
            .filter(behavior => behavior.behavior_type_id === 2)
            .map((behavior, i) => {
                return <option key={i}>{behavior.behavior_name}</option>
            })
        const replacement = (student.behaviors = this.state.behaviors)
            .filter(behavior => behavior.behavior_type_id === 3)
            .map((behavior, i) => {
                return <option key={i}>{behavior.behavior_name}</option>
            })


        return (
            <div>
                <Nav pageTitle={
                    (this.state.student_name) ? (`${this.state.student_name}'s Page`) : ('')
                    }/>

                {this.props.editStudent.editIsVisible && modal}






                <div className='behaviorReportContainer'>
                    <form>
                        <label>
                            :(
                        <input type='radio' name='behavior' value='discouraged'
                        checked={this.state.selectedOption === 'discouraged'}
                        onChange={this.handleOptionChange}/>
                        </label>

                        <label>
                            :)
                        <input type='radio' name='behavior' value='on task'
                        checked={this.state.selectedOption === 'on task'}
                        onChange={this.handleOptionChange}/>
                        </label>

                        <label>
                            :D
                        <input type='radio' name='behavior' value='replacement'
                        checked={this.state.selectedOption === 'replacement'}
                        onChange={this.handleOptionChange}/>
                        </label>

                        {this.state.selectedOption === 'discouraged' ? (
                            <select>
                                {discouraged}
                            </select>
                            ) : this.state.selectedOption === 'replacement' ? (
                            <select>
                                {replacement}
                            </select>
                            ) : <div></div>}

                        <input type='text' placeholder='comments'/>
                            


                    </form>

                </div>
            </div>
        )
    }
}


const mapState = (reduxState) => {
    return reduxState
}

export default connect(mapState, {requestStudent, unsyncStudentInfo})(Student)