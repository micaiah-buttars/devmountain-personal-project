import React, { Component } from "react";

export default class ReplacementCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_task_behavior: [this.props.on_task_behavior]
    };
  }
//   handleChange(key, value){
//     this.setState({
//       [key]: value
//     })
//   }
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