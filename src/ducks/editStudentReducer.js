import axios from 'axios'

const initialState = {
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
const UPDATE_NAME = 'UPDATE_NAME'

// export const updateName = (behavior) => {
//     console.log(behavior)
//     return {
//         type: UPDATE_NAME,
//         payload: behavior
//     }
// }

export const addStudent = (body) => {
    let data = axios.post('/students-data', body).then(res => res.data)
        return {
            type: ADD_STUDENT,
            payload: data
        }
}
export const addBehavior = (behavior) => {
    console.log(behavior)
        return {
            type: ADD_BEHAVIOR,
            payload: behavior
        }
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_STUDENT + '_FULFILLED':
                return {...state, ...action.payload}
        case ADD_BEHAVIOR:
                return {...state, behaviors: [...state.behaviors, action.payload]}
        default:
            return state
    }
}