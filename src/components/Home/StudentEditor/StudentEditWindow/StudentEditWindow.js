import React, {Component} from 'react'
import NameCard from '../NameCard/NameCard'
import OnTaskCard from '../OnTaskCard/OnTaskCard'
import DiscouragedCard from '../DiscouragedCard/DiscouragedCard'
import ReplacementCard from '../ReplacementCard/ReplacementCard'

import {connect} from 'react-redux'
import {addStudent} from '../../../../ducks/editStudentReducer'

import './StudentEditWindow.css'

class StudentEditWindow extends Component {
    constructor(props){
        super(props)
        const {student_id, student_name, reminder_interval} = this.props.student
        this.state = {
            currentIndex: 0,
            student: {
                student_id,
                student_name,
                reminder_interval
            },
            behavior_name: '',
            behavior_desc: '',
            behaviors: []
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.student !== prevProps.student){
            const {student_id, student_name, reminder_interval} = this.props.student
            this.setState(
                {
                    student: {
                        student_id,
                        student_name,
                        reminder_interval
                    }
                }
            )
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value || ''

        })
    }

    addStudent = () => {
        const {student_id, student_name, reminder_interval} = this.state.student

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
        console.log('PROPS', this.props)
        console.log('STATE', this.state)
        console.log('STUDENT NAME', this.state.student.student_name)
        let {currentIndex} = this.state
        return (
            <div className='editWindow'>
                {(() => {
                    switch(currentIndex){
                        case 0:
                            return <NameCard
                                student={this.state.student}
                                addStudent={this.addStudent}
                                handleChange={this.props.handleChange}
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

const mapState = (reduxState) => {
    return {
        studentData: reduxState.studentData,
        editStudent: reduxState.editStudent
    }

}
export default connect(mapState, {addStudent})(StudentEditWindow)

