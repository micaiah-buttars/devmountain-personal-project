import React, { Component } from "react";
import {connect} from 'react-redux'
import {toggleEditor} from '../../../ducks/editStudentReducer'
import './Nav.css'

class Nav extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="navBarContainer">
        <div className='location'>
          <h2>{this.props.pageTitle}</h2>
        </div>

        <div className='userActions'>
        <span>Logged in as {'Jen'}</span>
        <button onClick={this.props.toggleEditor}>|||</button>
        </div>

      </div>
    );
  }
}

const mapState = (reduxState) => {
  return reduxState
}
export default connect(mapState, {toggleEditor})(Nav)