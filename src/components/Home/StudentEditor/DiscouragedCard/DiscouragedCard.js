import React, { Component } from "react";
import {connect} from 'react-redux'

export default class DiscouragedCard extends Component {
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
    console.log(this.props)
    return (
      <div className="discouragedCard">
        <div>
          <label>
            Discouraged Behavior
            <input
            
              type='text'/>
          </label>
          <label>
            Description
            <input
            
              type='text'/>
          </label>

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
