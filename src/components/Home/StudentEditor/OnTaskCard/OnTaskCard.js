import React, { Component } from "react";
import BehaviorInput from '../StudentEditWindow/BehaviorInput/BehaviorInput'

export default class OnTaskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_task_behaviors: [{
        behavior_name: 'On task',
        behavior_desc: 'Following directions, quietly reading'
      }]
    };
  }


  addBehavior = (state) => {
    console.log(state)
    const {behavior_name, behavior_desc} = state

    let currentBehaviors = [...this.state.on_task_behaviors]

    const updatedState = currentBehaviors.push({
      behavior_name,
      behavior_desc
    })
    return this.setState({
      on_task_behaviors: updatedState
    })

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
        <h1 className='cardTitle'>On Task Behaviors</h1>
        <ul>
          {this.state.on_task_behaviors.map((behavior, i) => {
            return <li key={i}>
              {behavior.behavior_name}: {behavior.behavior_desc}
            </li>
          })}

        </ul>
      {/* <div className='behaviorInputs'>
          <label>
            On Task Behavior
            <br/>
            <input
                        name='on_task'
                value={this.props.on_task || ''}
                onChange={this.props.handleChange}
                type='text'/>
          </label>
          <label>
            Description
            <br/>
            <input
            name='on_task_desc'
                value={this.props.on_task_desc || ''}
                onChange={this.props.handleChange}
                type='text'/>
          </label>

        </div> */}
        <BehaviorInput addBehavior={this.props.addBehavior} handleChange={this.props.handleChange}
        behavior_name={this.props.behavior_name}
        behavior_desc={this.props.behavior_desc}/>
        <div className='buttonContainer'>
        <button onClick={this.handleClickPrev}>Prev</button>
        <button onClick={this.handleClickNext}>Next</button>
        </div>
      </div>


      </div>
    );
  }
}
