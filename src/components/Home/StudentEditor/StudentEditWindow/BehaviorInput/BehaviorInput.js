import React, { Component } from "react";
import {connect} from 'react-redux'
import {addBehavior} from '../../../../../ducks/editStudentReducer'
import './BehaviorInput.css'

class BehaviorInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      behavior_name: '',
      behavior_desc: ''
    }
  }
  handleChange = (e) => {
      const {name, value} = e.target
    this.setState({
      [name]: value || ''
    })
  }
  addBehavior = (e) => {
      e.preventDefault()
      this.props.addBehavior(this.state)
  }
  

  render(){
      console.log(this.state)
      return(
          <div>
            <form className='behaviorInput'>
                <label>
                    <input
                        className='behaviorName'
                        name='behavior_name'
                        value={this.state.behavior_name}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Behavior Name'
                    />
                </label>
                <br/>

                <label>
                    <textarea
                        className='behaviorDesc'
                        name='behavior_desc'
                        value={this.state.behavior_desc}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Operational Definition'
                        >
                    </textarea>
                <button className='submit' onClick={this.addBehavior}>{`+`}</button>

                </label>

              
            </form>
          </div>

      )
  }

}


const mapState = (reduxState) => {
    return {
        studentData: reduxState.studentData,
        editStudent: reduxState.editStudent
    }

}
export default connect(mapState, {addBehavior})(BehaviorInput)