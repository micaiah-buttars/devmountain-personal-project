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
            student_name: null,
            reminder_interval: null,
            on_task:null,
            on_task_desc:null,
            discouraged:null,
            discouraged_desc:null,
            replacement:null,
            replacement_desc:null
        }
    }
    saveChanges = (state) => {
        let {student_name, reminder_interval, on_task, on_task_desc, discouraged, discouraged_desc, replacement, replacement_desc} = state
        this.setState({
            student_name: student_name || this.state.student_name,
            reminder_interval: reminder_interval || this.state.reminder_interval,
            on_task: on_task || this.state.on_task,
            on_task_desc: on_task_desc || this.state.on_task_desc,
            discouraged: discouraged || this.state.discouraged,
            discouraged_desc: discouraged_desc || this.state.discouraged_desc,
            replacement: replacement || this.state.replacement,
            replacement_desc: replacement_desc || this.state.replacement_desc,
            
        })
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
                            addStudent={this.addStudent}
                                saveChanges={this.saveChanges}
                                nextCard={this.nextCard}/>
                        case 1:
                            return <OnTaskCard
                                saveChanges={this.saveChanges}
                                nextCard={this.nextCard}
                                prevCard={this.prevCard}/>
                        case 2:
                            return <DiscouragedCard
                                saveChanges={this.saveChanges}
                                nextCard={this.nextCard}
                                prevCard={this.prevCard}/>
                        case 3:
                            return <ReplacementCard
                                addStudent={this.addStudent}
                                saveChanges={this.saveChanges}
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