import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/index'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
	const store = createStore(rootReducer,
							  applyMiddleware(
								  thunkMiddleware,
								  loggerMiddleware
							  ),
							  initialState)
	return store
}
