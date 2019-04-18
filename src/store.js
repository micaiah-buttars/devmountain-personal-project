import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import studentDataReducer from './ducks/studentDataReducer'
import editStudentReducer from './ducks/editStudentReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    studentData: studentDataReducer,
    editStudent: editStudentReducer

})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))