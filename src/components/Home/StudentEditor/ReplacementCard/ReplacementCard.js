import React, { Component } from "react";

export default class ReplacementCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_task_behavior: [this.props.on_task_behavior]
    };
  }

handleClickNext = () => {
    this.props.nextCard()
  }
  handleClickPrev = () => {
    this.props.prevCard()
  }

  render() {
    return (
      <div className="behaviorCard">
      <div>
        <div className='behaviorInputs'>
          <label>
            Replacement Behavior
            <br/>
            <input
            
              type='text'/>
          </label>
          <label>
            Description
            <br/>
            <input
            
              type='text'/>
          </label>
          <button>Submit</button>

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