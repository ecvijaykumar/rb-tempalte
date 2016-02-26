import * as types from '../constants/ActionTypes'

const initialState = {
	isFetching: false,
	books: [],
	book: {},
	title:"Vijay TMS"
}

export default function books(state = initialState, action) {
	switch(action.type) {
		case types.REQUEST_TOP_MENU_TITLE:
		return Object.assign({}, state, {
			title: "Tenant Management System"
		})
	case types.REQUEST_POPULAR_BOOKS:
		return Object.assign({}, state, {
			isFetching: true
		})
	case types.RECEIVE_POPULAR_BOOKS:
		return Object.assign({}, state, {
			isFetching : false,
			books      : action.books,
			lastUpdate : action.receivedAt
		})
	case types.REQUEST_BOOK:
		return Object.assign({}, state, {
			title: "Book > Vishnu Sahasranamam",
			book: {
				isLoading : true,
				title     : "Vishnu Sahasranamam",
				fromPage  : 0,
				toPage    : 10,
			}
		})
	case types.RECEIVE_BOOK:
		return Object.assign({}, state, {
			book: {
				isLoading : false,
				title     : "Vishnu Sahasranamam",
				fromPage  : action.fromPage,
				toPage    : action.toPage,
			}
		})

	default:
		return state
	}
}
