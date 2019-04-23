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
            selectedOption: ''
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.props.requestStudent(id)
        this.props.getTimeSlots()

    }
    handleOptionChange = (e) => {
        const {name, value} = e.target
        this.setState({
            selectedOption: value
        })
        this.props.updateLog({name, value})
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.props.updateLog({name, value})
    }
    handleSubmit = () => {
        const {student_id} = this.props.studentData.students[0]
        const {behavior_id, behavior_type_id, teacher_id, time_slot_id, log_comment} = this.props.log
        let onTask = this.props.studentData.students[0].behaviors.filter(behavior => behavior.behavior_type_id === 1)
        this.props.addLog({
            student_id,
            behavior_id: behavior_id || onTask[0].behavior_id,
            behavior_type_id,
            teacher_id,
            time_slot_id,
            log_comment
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
                />

        const discouraged = (behaviors || [''])
            .filter(behavior => behavior.behavior_type_id === 2)
            .map((behavior, i) => {
                return <option
                    key={i}
                    value={behavior.behavior_id}
                    onChange={this.handleChange}>{behavior.behavior_name}</option>
            })
        const replacement = (behaviors || [''])
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
                    <div>
                        <label>
                            <input type='radio' name='behavior_type_id' value='2'
                            checked={this.state.selectedOption === '2'}
                            onChange={this.handleOptionChange}/>
                            <span>Discouraged</span>
                        </label>

                        <label>
                            <input type='radio' name='behavior_type_id' value='1'
                            checked={this.state.selectedOption === '1'}
                            onChange={this.handleOptionChange}/>
                            <span>On Task</span>
                        </label>

                        <label>
                            <input type='radio' name='behavior_type_id' value='3'
                            checked={this.state.selectedOption === '3'}
                            onChange={this.handleOptionChange}/>
                            <span>Replacement</span>
                        </label>
                    </div>

                    {this.state.selectedOption === '2' ? (
                        <select
                            name='behavior_id'
                            onChange={this.handleChange}>
                            <option>--Select--</option>
                            {discouraged}
                        </select>
                        ) : this.state.selectedOption === '3' ? (
                        <select
                            name='behavior_id'
                            onChange={this.handleChange}>
                            <option>--Select--</option>
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
                            




                </div>
            </div>
        )
    }
}


const mapState = (reduxState) => {
    return reduxState
}

export default connect(mapState, {requestStudent, getTimeSlots, updateLog, addLog})(Student)