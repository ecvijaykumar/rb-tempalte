import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

import * as types from '../constants/ActionTypes'

const requestPopularBooks = () => {
	return {
		type: types.REQUEST_POPULAR_BOOKS
	}
}

const receivePopularBooks = (json) => {
	console.log(json)
	return {
		type: types.RECEIVE_POPULAR_BOOKS,
		books: json.data.map(child => child.books),
		receivedAt: Date.now()
	}
}

export function initBooks() {
	return dispatch => {
		dispatch(requestPopularBooks())
		return fetch('//localhost:3000/getPopularBooks')
			.then(response => response.json()) 
			.then(json => dispatch(receivePopularBooks(json)))
			.catch(err => { throw err })
	}
}
