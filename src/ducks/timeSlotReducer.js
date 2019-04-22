import axios from 'axios'

const initialState = {
    time_slots: ['']
}

const GET_TIME_SLOTS = 'GET_TIME_SLOTS'


export const getTimeSlots = () => {
    let data = axios.get('/times').then(res => res.data)
        return {
            type: GET_TIME_SLOTS,
            payload: data
        }
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TIME_SLOTS + '_FULFILLED':
            return {time_slots: action.payload}
        default:
            return state
    }
}