import React, { Component } from "react";
import {connect} from 'react-redux'
import {updateStudent, addStudent, toggleEditor} from '../../../../ducks/editStudentReducer'

class NameCard extends Component {
  handleClickNext = () => {
    this.props.nextCard()
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.props.updateStudent({name, value})
  }

  handleSubmit = async () => {
    const {student_id, student_name, reminder_interval} = this.props.editStudent.student
    await this.props.addStudent(
      student_id,
      student_name,
      reminder_interval
    )
    this.props.toggleEditor()

  }


  render() {
    const {student_name, reminder_interval} = this.props.editStudent.student
    return (
      <div className="nameCard">
      <div>
      <div className='addContainer'>
        <div className='nameContainer'>
        <input
              className='studentName'
              name='student_name'
              value={student_name}
              onChange={this.handleChange}
              type='text'
              placeholder={`Student's Name`}/>


            <select
              className='reminderInterval'
              name='reminder_interval'
              value={reminder_interval}
              onChange={this.handleChange}>
              <option value=''>--Select--</option>
              <option value='1'>5</option>
              <option value='2'>10</option>
              <option value='3'>15</option>
              <option value='4'>30</option>
              <option value='5'>60</option>
            </select>
        </div>

        </div>
      </div>
        <div className='buttonContainer'>
          <button onClick={this.props.toggleEditor}>Cancel</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>

        
      </div>
    );
  }
}

const mapState = (reduxState) => {
  return {
      studentData: reduxState.studentData,
      editStudent: reduxState.editStudent
  }

}
export default connect(mapState, {updateStudent, addStudent, toggleEditor})(NameCard)
