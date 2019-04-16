import axios from 'axios'

const initialState = {
    students: [
        {
        student_id: 0,
        student_name: '',
        reminder_interval: 1
        }
    ]
}

const REQUEST_ALL_STUDENTS = 'REQUEST_ALL_STUDENTS'
const REQUEST_STUDENT = 'REQUEST_STUDENT'

export const requestAllStudents = () => {
    let data = axios.get('/students-data').then(res => res.data)
        return {
            type: REQUEST_ALL_STUDENTS,
            payload: data
        }
}
export const requestStudent = (params) => {
    let data = axios.get(`/student-data/${params}`).then(res => res.data)
        return {
            type: REQUEST_STUDENT,
            payload: data
        }
}

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_ALL_STUDENTS + '_FULFILLED':
            return {students: action.payload}
        case REQUEST_STUDENT + '_FULFILLED':
                return {students: action.payload}
        default:
            return state
    }
}