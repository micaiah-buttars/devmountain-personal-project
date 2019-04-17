import axios from 'axios'

const initialState = {
    student_id: null,
    student_name: '',
    reminder_interval: 0,
    on_task: '',
    on_task_desc: '',
    discouraged: '',
    discouraged_desc: '',
    replacement: '',
    replacement_desc: ''
}

const ADD_STUDENT = 'ADD_STUDENT'

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
                return {students: action.payload}
        default:
            return state
    }
}