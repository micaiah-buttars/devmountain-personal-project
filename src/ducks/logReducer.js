import axios from 'axios'

const initialState = {
        student_id: 0,
        behavior_id: 0,
        behavior_type_id: 0,
        teacher_id: 1,
        time_slot_id: 0,
        log_comment: '',
        log_date:''
}

const ADD_LOG = 'ADD_LOG'
const UPDATE_LOG = 'UPDATE_LOG'


export const addLog = (log) => {
    console.log(log)
    let data = axios.post('/students-log', log).then(res => res.data)
        return {
            type: ADD_LOG,
            payload: data
        }
}
export const updateLog = (obj) => {
    const {name, value} = obj
    const log = {
            [name]: value || ''
        }
    return {
        type: UPDATE_LOG,
        payload: log
    } 
}

export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_LOG:
            return {...state, ...action.payload}
        case ADD_LOG + '_FULFILLED':
            return {log: action.payload}
        default:
            return state
    }
}