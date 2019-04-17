import React, { Component } from "react";

export default class NameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_name: '',
      reminder_interval: null
    };
  }
  handleChangeName = (value) => {
    this.setState({
      student_name: value
    })
  }
  handleChangeInterval = (value) => {
    this.setState({
      reminder_interval: value
    })
  }
  handleClickNext = async () => {
    await this.props.saveChanges(this.state)
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
              value={`${this.state.student_name}`}
              onChange={e => this.handleChangeName(e.target.value)}
              type='text'/>
          </label>

          <label>
            Reminder Interval
            <br/>
            <select
              value={this.props.reminder_interval}
              onChange={e => this.handleChangeInterval(e.target.value)}>
              <option value='0'>--Select--</option>
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
