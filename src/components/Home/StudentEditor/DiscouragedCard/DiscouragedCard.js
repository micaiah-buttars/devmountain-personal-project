import React, { Component } from "react";

export default class DiscouragedCard extends Component {
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
    console.log(this.props)
    return (
        <div className="behaviorCard">
        <span>Discouraged Behaviors</span>
        <div>
        <div className='behaviorInputs'>
          <label>
            Discouraged Behavior
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