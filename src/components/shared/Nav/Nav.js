import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: ['']
    };
  }

  render() {
    return (
      <div className="navBarContainer">
        <div className='teacherName'>
        <span>Logged in as {'Jen'}</span>
        </div>
        <div className='location'> 

        </div>

      </div>
    );
  }
}
