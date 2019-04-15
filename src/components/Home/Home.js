import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    // componentDidMount(){
    //     this.viewAll()
    // }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <form>
                    <input type='text'/>
                    <input type='text'/>
                </form>
                <Link to='/student'>Student</Link>
            </div>
        )
    }
}