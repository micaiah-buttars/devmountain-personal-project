import axios from 'axios'

const initialState = {

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
            console.log(action.payload)
            const {student_id, student_name, reminder_interval} = action.payload
    }
}