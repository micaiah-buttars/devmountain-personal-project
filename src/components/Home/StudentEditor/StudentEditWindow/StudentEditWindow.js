import React, {Component} from 'react'
import NameCard from '../NameCard/NameCard'
import OnTaskCard from '../OnTaskCard/OnTaskCard'
import DiscouragedCard from '../DiscouragedCard/DiscouragedCard'
import ReplacementCard from '../ReplacementCard/ReplacementCard'
import './StudentEditWindow.css'

export default class StudentEditWindow extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentIndex: 1,
            student_id: 0,
            student_name: '',
            reminder_interval: '',
            behavior_name: '',
            behavior_desc: '',
            behaviors: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value || ''

        })
    }
    addBehavior = (state) => {
        const {behavior_name, behavior_desc} = state

        this.state.behaviors.push({
            behavior_name,
            behavior_desc
        })
        console.log(this.state)
        return this.state
        // this.setState({
        //     behaviors: [
        //         ...this.state.behaviors,
        //         {
        //             behavior_name,
        //             behavior_desc

        //         }

        //     ]
        // })

    }

    addStudent = () => {
        const {student_id, student_name, reminder_interval} = this.state

        this.props.addStudent({student_id, student_name, reminder_interval})
    }



    nextCard = () => { 
        let {currentIndex} = this.state
        if(currentIndex < 3){
            currentIndex++
            return this.setState({
                currentIndex
            })
        }

    }
    prevCard = () => {
        let {currentIndex} = this.state
        if(currentIndex > 0){
            currentIndex--
            return this.setState({
                currentIndex
            })
        }

    }
    render(){
        console.log(this.state)
        let {currentIndex} = this.state
        return (
            <div className='editWindow'>
                {(() => {
                    switch(currentIndex){
                        case 0:
                            return <NameCard
                                student_id={this.state.student_id}
                                student_name={this.state.student_name}
                                reminder_interval={this.state.reminder_interval}
                                addStudent={this.addStudent}
                                handleChange={this.handleChange}
                                nextCard={this.nextCard}/>
                                
                        case 1:
                            return <OnTaskCard
                                addBehavior={this.addBehavior}
                                behavior_name={this.state.behavior_name}
                                behavior_desc={this.state.behavior_desc}
                                handleChange={this.handleChange}
                                nextCard={this.nextCard}
                                prevCard={this.prevCard}/>
                        case 2:
                            return <DiscouragedCard
                                handleChange={this.handleChange}
                                nextCard={this.nextCard}
                                prevCard={this.prevCard}/>
                        case 3:
                            return <ReplacementCard
                                addStudent={this.addStudent}
                                handleChange={this.handleChange}
                                nextCard={this.nextCard}
                                prevCard={this.prevCard}/>
                        default:
                        return null
                    }
                })()}
            </div>
        )
        
    }
}