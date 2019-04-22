import axios from 'axios'

const initialState = {
    editIsVisible: false,
    student: {
        student_id: 0,
        student_name: '',
        reminder_interval: 0
    },
}


const ADD_STUDENT = 'ADD_STUDENT'
const ADD_BEHAVIOR = 'ADD_BEHAVIOR'
const TOGGLE_EDITOR = 'TOGGLE_EDITOR'
const EDIT_STUDENT = 'EDIT_STUDENT'
const SYNC_STUDENT_INFO = 'SYNC_STUDENT_INFO'
const UNSYNC_STUDENT_INFO = 'UNSYNC_STUDENT_INFO'

export const addStudent = (student_id, student_name, reminder_interval) => {
    const student = {
        student_id,
        student_name,
        reminder_interval,
    }

    let data = axios.post('/students-data', student).then(res => res.data)
        return {
            type: ADD_STUDENT,
            payload: data[0]
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

export const updateStudent = (obj) => {
    const {name, value} = obj
    const student = {
            [name]: value || ''
        }
    return {
        type: EDIT_STUDENT,
        payload: student
    } 
}

export const syncStudentInfo = (student) => {
    return {
        type: SYNC_STUDENT_INFO,
        payload: student

    } 
}
export const unsyncStudentInfo = () => {
    return {
        type: UNSYNC_STUDENT_INFO
    }
}


export default function(state = initialState, action){
    switch(action.type){
        case ADD_STUDENT + '_FULFILLED':
                return {...state, student: action.payload}
        case ADD_BEHAVIOR:
                return {...state, behaviors: [...state.behaviors, action.payload]}
        case TOGGLE_EDITOR:
            return {...state, editIsVisible: !state.editIsVisible}
        case EDIT_STUDENT:
            return {...state, student: {...state.student, ...action.payload}}
        case SYNC_STUDENT_INFO:
            return {...state, student: {...action.payload}}
        case UNSYNC_STUDENT_INFO:
            return {...state, ...initialState}
        default:
            return state
    }
}