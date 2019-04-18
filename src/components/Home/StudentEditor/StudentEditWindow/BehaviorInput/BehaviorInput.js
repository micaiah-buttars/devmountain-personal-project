import React, { Component } from "react";
import './BehaviorInput.css'

export default class BehaviorInput extends Component {
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
  addBehavior = () => {
      this.props.addBehavior(this.state)
  }
  

  render(){
      return(
          <div>
            <form className='behaviorInput'>
                <label>
                    <input
                        className='behaviorName'
                        name='behavior_name'
                        value={this.props.behavior_name}
                        onChange={this.props.handleChange}
                        type='text'
                        placeholder='Behavior Name'
                    />
                </label>
                <br/>

                <label>
                    <textarea
                        className='behaviorDesc'
                        name='behavior_desc'
                        value={this.props.behavior_desc}
                        onChange={this.props.handleChange}
                        type='text'
                        placeholder='Operational Definition'
                        >
                    </textarea>

                </label>
                <input type='submit' onSubmit={this.addBehavior}/>

              
            </form>
          </div>

      )
  }

}