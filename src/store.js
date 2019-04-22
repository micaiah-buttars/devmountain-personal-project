import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import studentDataReducer from './ducks/studentDataReducer'
import editStudentReducer from './ducks/editStudentReducer'
import timeSlotReducer from './ducks/timeSlotReducer'
import logReducer from './ducks/logReducer'

const rootReducer = combineReducers({
    studentData: studentDataReducer,
    editStudent: editStudentReducer,
    time: timeSlotReducer,
    log: logReducer

})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))