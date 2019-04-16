import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    render(){
        return (
            <div>
                <h1>Login</h1>
                <form className='loginForm'>
                    <input type='text'/>
                    <input type='password'/>
                    <button>Log In</button>
                </form>
                <Link to='/'>Login</Link>
            </div>
        )
    }
}