import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './StudentBehaviors.css'

export default class StudentBehaviors extends Component {
    constructor(props){
        super(props)
        const {id, name, reminderInterval} = this.props
        this.state = {
            id,
            name,
            reminderInterval,
        }
    }
    render(){
        return (
            <div>
                <form className='studentBehaviorsForm'>
                    <input className='inputName' type='text' placeholder='name'/><br/>
                    <input className='onTask' type='text' placeholder='name'/>
                    
                    <div className='columns'>
                    <div className='inputColumn'>
                    <span>Discouraged Behaviors</span>
                    <input className='inputText' type='text' placeholder='name'/>
                    <input className='inputText' type='text' placeholder='name'/>
                    <input className='inputText' type='text' placeholder='name'/>
                    <input className='inputText' type='text' placeholder='name'/>

                    </div>
                    <div className='inputColumn'>
                    <span>Replacement Behaviors</span>
                    <input className='inputText' type='text' placeholder='name'/>
                    <input className='inputText' type='text' placeholder='name'/>
                    <input className='inputText' type='text' placeholder='name'/>
                    <input className='inputText' type='text' placeholder='name'/>

                    </div>
                    </div>

                    


                </form>
            </div>

        )
    }

}