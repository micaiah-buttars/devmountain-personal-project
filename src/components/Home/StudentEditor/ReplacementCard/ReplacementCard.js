import React, { Component } from "react";
import {connect} from 'react-redux'

export default class ReplacementCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_task_behavior: [this.props.on_task_behavior]
    };
  }
  handleChange(key, value){
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <div className="replacementCard">
        <div>
          <label>
            Replacement Behavior
            <input
            
              type='text'/>
          </label>
          <label>
            Description
            <input
            
              type='text'/>
          </label>
          <button>Submit</button>

        </div>
        <button onClick={this.props.prevCard}>Prev</button>
        <button onClick={this.props.nextCard}>Next</button>
      </div>
    );
  }
}

// const mapState = (reduxState) => {
//     return reduxState
// }

// export default connect(mapState, {requestStudent})(NameCard)
