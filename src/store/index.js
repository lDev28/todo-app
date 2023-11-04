import { createStore, combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	todos: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
