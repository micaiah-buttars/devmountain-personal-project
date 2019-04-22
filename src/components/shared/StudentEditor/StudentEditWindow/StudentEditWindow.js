import React, {Component} from 'react'
import NameCard from '../NameCard/NameCard'
import OnTaskCard from '../OnTaskCard/OnTaskCard'
import DiscouragedCard from '../DiscouragedCard/DiscouragedCard'
import ReplacementCard from '../ReplacementCard/ReplacementCard'

import {connect} from 'react-redux'

import './StudentEditWindow.css'

class StudentEditWindow extends Component {
    constructor(props){
        super(props)
        const {student_id, student_name, reminder_interval} = this.props.editStudent.student
        this.state = {
            currentIndex: 0,
            student: {
                student_id,
                student_name,
                reminder_interval
            },
            behaviors: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value || ''

        })
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
        let {currentIndex} = this.state
        return (
            <div className='editWindow'>
                {(() => {
                    switch(currentIndex){
                        case 0:
                            return <NameCard student={this.props.student}/>       
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

const mapState = (reduxState) => {
    return {
        studentData: reduxState.studentData,
        editStudent: reduxState.editStudent
    }

}
export default connect(mapState)(StudentEditWindow)

