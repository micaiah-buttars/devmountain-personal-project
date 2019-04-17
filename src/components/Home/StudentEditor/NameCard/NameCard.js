import React, { Component } from "react";
import {connect} from 'react-redux'

export default class NameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student_name: this.props.student_name,
      reminder_interval: this.props.reminder_interval
    };
  }
  handleChangeName(value){
    this.setState({
      student_name: value
    })
  }
  handleChangeInterval(value){
    this.setState({
      reminder_interval: value
    })
  }
  handleClickNext = async () => {
    await this.props.saveChanges(this.state)
    this.props.nextCard()
  }


  render() {
    console.log('state:', this.state)
    console.log('props:', this.props)
    return (
      <div className="nameCard">
        <div>
          <label>
            Student's Name
            <input
              value={this.state.student_name}
              onChange={e => this.handleChangeName(e.target.value)}
              type='text'/>
          </label>

          <label>
            Reminder Interval
            <select
              value={this.state.reminder_interval}
              onChange={e => this.handleChangeInterval(e.target.value)}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='30'>30</option>
              <option value='60'>60</option>
            </select>
          </label>

        </div>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// const mapState = (reduxState) => {
//     return reduxState
// }

// export default connect(mapState, {requestStudent})(NameCard)
