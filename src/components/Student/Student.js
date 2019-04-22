import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestStudent} from '../../ducks/studentDataReducer'
// import {unsyncStudentInfo} from '../../ducks/editStudentReducer'
import {getTimeSlots} from '../../ducks/timeSlotReducer'
import {updateLog, addLog} from '../../ducks/logReducer'
import StudentEditWindow from '../shared/StudentEditor/StudentEditWindow/StudentEditWindow'

import Nav from '../shared/Nav/Nav'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            behaviors: [''],
            selectedOption: 'on task'
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.requestStudent(id)
        this.props.getTimeSlots()
    }
    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.props.updateLog({name, value})
    }
    handleSubmit = () => {
        this.props.addLog(this.state.student_id)
    }
    
    render(){
        console.log('PROPS', this.props)
        console.log('STATE', this.state)
        const {student_id, student_name, reminder_interval, behaviors} = this.props.studentData.students[0]
        const student = {
            student_id,
            student_name,
            reminder_interval,
            behaviors
        }
        const modal = <StudentEditWindow
                student={student}
                // addStudent={this.addStudent}
                // handleChange={this.handleChange}
                />

        const discouraged = (behaviors)
            .filter(behavior => behavior.behavior_type_id === 2)
            .map((behavior, i) => {
                return <option
                    key={i}
                    value={behavior.behavior_id}
                    onChange={this.handleChange}>{behavior.behavior_name}</option>
            })
        const replacement = (behaviors)
            .filter(behavior => behavior.behavior_type_id === 3)
            .map((behavior, i) => {
                return <option
                    key={i}
                    value={behavior.behavior_id}
                    onChange={this.handleChange}>{behavior.behavior_name}</option>
            })

        const times = (this.props.time.time_slots.map((time, i) => {
            return <option
                key={i}
                value={time.time_slot_id}
                >{time.time_value}</option>
        }))


        return (
            <div>
                <Nav pageTitle={
                    (student_name) ? (`${student_name}'s Page`) : ('')
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
                            <select
                                name='behavior_id'
                                onChange={this.handleChange}>
                                {discouraged}
                            </select>
                            ) : this.state.selectedOption === 'replacement' ? (
                            <select
                                name='behavior_id'
                                onChange={this.handleChange}>
                                {replacement}
                            </select>
                            ) : <div></div>}

                        <input
                            type='text'
                            placeholder='comments'
                            name='log_comment'
                            value={this.props.log.log_comment}
                            onChange={this.handleChange}
                            
                            />

                        <select
                            name='time_slot_id'
                            onChange={this.handleChange}>
                            {times}
                        </select>

                        <button onClick={this.handleSubmit}>Send Log</button>
                            


                    </form>

                </div>
            </div>
        )
    }
}


const mapState = (reduxState) => {
    return reduxState
}

export default connect(mapState, {requestStudent, getTimeSlots, updateLog, addLog})(Student)