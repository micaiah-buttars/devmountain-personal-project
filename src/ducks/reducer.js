import axios from 'axios'

const initialState = {
    students: []

}

const REQUEST_ALL_STUDENTS = 'REQUEST_ALL_STUDENTS'

export const requestAllStudents = () => {
    let data = axios.get('/students-data').then(res => res.data)
        return {
            type: REQUEST_ALL_STUDENTS,
            payload: data
        }
}

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_ALL_STUDENTS + '_FULFILLED':
            // const {student_id, student_name, reminder_interval} = action.payload
            return {students: action.payload}
        default:
            return state
    }
}