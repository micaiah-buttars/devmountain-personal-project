import React, { Component } from "react";
import {connect} from 'react-redux'
import {toggleEditor} from '../../../ducks/editStudentReducer'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: ['']
    };
  }

  invokeEditor = async (student) => {
    const {student_id, student_name, reminder_interval} = student
    await this.setState({
        editIsVisible: true,
        student: {
            student_id,
            student_name,
            reminder_interval
        }

    })
    console.log(this.state)

} 

  render() {
    console.log(this.props)
    return (
      <div className="navBarContainer">
        <div className='teacherName'>
        <span>Logged in as {'Jen'}</span>
        </div>
        <div className='location'> 


        </div>
        <button onClick={this.props.toggleEditor}>|||</button>

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
export default connect(mapState, {toggleEditor})(Nav)