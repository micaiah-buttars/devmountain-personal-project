import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
    render(){
        return (
            <div>
                <h1>Login</h1>
                <form className='loginForm'>
                    <input className='loginInput' type='text'/>
                    <input className='loginInput' type='password'/>
                    <input type='submit' value='Log In'/>
                </form>
                <Link to='/'>Login</Link>
            </div>
        )
    }
}