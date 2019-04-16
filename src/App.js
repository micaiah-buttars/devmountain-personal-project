import React, { Component } from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Student from './components/Student/Student'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={Login} path='/login'/>
          <Route component={Student} path='/student/:id'/>
        </Switch>
      </HashRouter>

    );
  }
}

export default App;
