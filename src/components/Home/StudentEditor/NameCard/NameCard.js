import React, { Component } from "react";

export default class NameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_name: '',
      reminder_interval: ''
    };
  }


  handleClickNext = () => {
    this.props.nextCard()
  }


  render() {
    return (
      <div className="nameCard">
      <div>
      <div>
          <label>
            Student's Name
            <br/>
            <input
              name='student_name'
              value={this.props.student.student_name}
              onChange={this.props.handleChange}
              type='text'/>
          </label>

          <label>
            Reminder Interval
            <br/>
            <select
              name='reminder_interval'
              value={this.props.student.reminder_interval}
              onChange={this.props.handleChange}>
              <option value=''>--Select--</option>
              <option value='1'>5</option>
              <option value='2'>10</option>
              <option value='3'>15</option>
              <option value='4'>30</option>
              <option value='5'>60</option>
            </select>
          </label>
          <button onClick={this.props.addStudent}>Submit</button>

        </div>
        <div className='buttonContainer'>
        <button onClick={this.handleClickNext}>Next</button>
        </div>
      </div>

        
      </div>
    );
  }
}
