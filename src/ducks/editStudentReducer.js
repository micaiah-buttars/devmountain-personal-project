import axios from 'axios'

const initialState = {
    editIsVisible: false,
    student: {
        student_id: 0,
        student_name: null,
        reminder_interval: null
    },
    behaviors: [{
        behavior_name: 'On task',
        behavior_desc: 'Following directions, quietly reading'
      }

    ]
}

const ADD_STUDENT = 'ADD_STUDENT'
const ADD_BEHAVIOR = 'ADD_BEHAVIOR'
const TOGGLE_EDITOR = 'TOGGLE_EDITOR'
const EDIT_STUDENT = 'EDIT_STUDENT'

export const addStudent = (body) => {
    let data = axios.post('/students-data', body).then(res => res.data)
        return {
            type: ADD_STUDENT,
            payload: data
        }
}
export const addBehavior = (behavior) => {
        return {
            type: ADD_BEHAVIOR,
            payload: behavior
        }
}
export const toggleEditor = () => {
    return {
        type: TOGGLE_EDITOR,
    }
}

export const editStudent = (e) => {
    const {name, value} = e.target
    const student = {
            ...this.state.student,
            [name]: value || ''
        }
        
        
    
    return {

    }
    this.setState({
        student: {
            ...this.state.student,
            [name]: value || ''
        }


    })}
}


export default function(state = initialState, action){
    switch(action.type){
        case ADD_STUDENT + '_FULFILLED':
                return {...state, student: action.payload}
        case ADD_BEHAVIOR:
                return {...state, behaviors: [...state.behaviors, action.payload]}
        case TOGGLE_EDITOR:
            return {...state, editIsVisible: !this.state.editIsVisible}
        default:
            return state
    }
}