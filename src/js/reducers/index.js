import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

import books from './books'
import tenants from './tenants'


const rootReducer = combineReducers({
	books,
	tenants,
	routing: routeReducer
})

export default rootReducer
