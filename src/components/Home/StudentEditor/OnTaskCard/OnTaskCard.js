import React, { Component } from "react";

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
      <div className="behaviorCard">
      <div>
      <div className='behaviorInputs'>
          <label>
            On Task Behavior
            <br/>
            <input
                value={this.state.on_task}
                onChange={e => this.handleChangeTask(e.target.value)}
                type='text'/>
          </label>
          <label>
            Description
            <br/>
            <input
                value={this.state.on_task_desc}
                onChange={e => this.handleChangeTaskDesc(e.target.value)}
                type='text'/>
          </label>

        </div>
        <div className='buttonContainer'>
        <button onClick={this.handleClickPrev}>Prev</button>
        <button onClick={this.handleClickNext}>Next</button>
        </div>
      </div>


      </div>
    );
  }
}
