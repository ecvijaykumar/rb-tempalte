import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory } from 'react-router-redux'
import rootReducer from '../reducers/index'

const loggerMiddleware = createLogger()

const history = createHistory()
// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history)

export default function configureStore(initialState) {
	const store = createStore(rootReducer,
							  applyMiddleware(
								  thunkMiddleware,
								  loggerMiddleware,
								  reduxRouterMiddleware
							  ),
							  initialState)

	// Required for replaying actions from devtools to work
	reduxRouterMiddleware.listenForReplays(store)
	
	return store
}
