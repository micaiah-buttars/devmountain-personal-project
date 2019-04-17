import React, { Component } from "react";
import {connect} from 'react-redux'

export default class OnTaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_task: this.props.on_task,
      on_task_desc: this.props.on_task_desc
    };
  }
  handleChangeTask(value){
    this.setState({
      on_task: value
    })
  }
  handleChangeTaskDesc(value){
    this.setState({
      on_task_desc: value
    })
  }
  handleClickNext = async () => {
    await this.props.saveChanges(this.state)
    this.props.nextCard()
  }
  handleClickPrev = async () => {
    await this.props.saveChanges(this.state)
    this.props.prevCard()
  }

  render() {
    return (
      <div className="onTaskCard">
        <div>
          <label>
            On Task Behavior
            <input
                value={this.state.on_task}
                onChange={e => this.handleChangeTask(e.target.value)}
                type='text'/>
          </label>
          <label>
            Description
            <input
                value={this.state.on_task_desc}
                onChange={e => this.handleChangeTaskDesc(e.target.value)}
                type='text'/>
          </label>

        </div>
        <button onClick={this.handleClickPrev}>Prev</button>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// const mapState = (reduxState) => {
//     return reduxState
// }

// export default connect(mapState, {requestStudent})(NameCard)
