import {createStore, applyMiddleware} from 'redux'
// import {combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './ducks/reducer'

// const rootReducer = combineReducers({
//     budget: budgetReducer,
//     user: userReducer,

// })

export default createStore(reducer, applyMiddleware(promiseMiddleware))