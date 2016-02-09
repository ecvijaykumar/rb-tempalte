import * as types from '../constants/ActionTypes'

const initialState = {
	isFetching: false,
	books: []
}

export default function books(state = initialState, action) {
	switch(action.type) {
	case types.REQUEST_POPULAR_BOOKS:
		return Object.assign({}, state, {
			isFetching: true
		})
	case types.RECEIVE_POPULAR_BOOKS:
		return Object.assign({}, state, {
			isFetching: false,
			books: action.books,
			lastUpdate: action.receivedAt
		})
	default:
		return state
	}
}
