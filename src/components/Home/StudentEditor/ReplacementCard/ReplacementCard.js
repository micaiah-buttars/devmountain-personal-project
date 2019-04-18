import React, { Component } from "react";
import BehaviorInput from '../StudentEditWindow/BehaviorInput/BehaviorInput'

export default class ReplacementCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: ['']
    };
  }
  newInput = () => {
    if(this.state.inputs.length < 4){
      this.setState({
        inputs: [...this.state.inputs, '']
      })
    }

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
        <div className='cardTitle'>
        <div  className='title'>
        <h1>Replacement Behaviors</h1>
        </div>

        </div>

        <div className='inputsContainer'>
        {this.state.inputs.map((item, i) => 
        <div>
          <BehaviorInput key={i}/>
        </div>

        )}
        </div>


        
        <div className='buttonContainer'>
        <button onClick={this.handleClickPrev}>Prev</button>
        <button onClick={this.newInput}>Add New Behavior</button>
        <button onClick={this.handleClickNext}>Next</button>
        </div>
      </div>


      </div>
    );
  }
}