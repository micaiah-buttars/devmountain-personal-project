import axios from 'axios'

const initialState = {
    student_id: 0,
    student_name: null,
    reminder_interval: null,
    on_task: null,
    on_task_desc: null,
    discouraged: null,
    discouraged_desc: null,
    replacement: null,
    replacement_desc: null
}

const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_NAME = 'UPDATE_NAME'

export const updateName = (body) => {
    let data = axios.post('/students-data', body).then(res => res.data)
    return {
        type: UPDATE_NAME,
        payload: data
    }
}

export const addStudent = (body) => {
    let data = axios.post('/students-data', body).then(res => res.data)
        return {
            type: ADD_STUDENT,
            payload: data
        }
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_STUDENT + '_FULFILLED':
                return {...state, ...action.payload}
        default:
            return state
    }
}