import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

import * as types from '../constants/ActionTypes'

export const requestTopMenuTitle = () => {
	return {
		type: types.REQUEST_TOP_MENU_TITLE
	}
}

const requestPopularBooks = () => {
	console.log("Request Popular Books")
	return {
		type: types.REQUEST_POPULAR_BOOKS
	}
}

const requestBook = (id) => {
	return {
		type: types.REQUEST_BOOK,
		book_id: id
	}
}


const receiveBook = (id) => {
	return {
		type: types.RECEIVE_BOOK,
		book_id: id,
		fromPage: 0,
		toPage: 10
	}
}
const mockFetchBook = () => {
	return new Promise(function(resolve, reject){
		setTimeout(() =>  resolve(10), 1000)
	})
}


const receivePopularBooks = (json) => {
	console.log("A receive Popular")
	return {
		type: types.RECEIVE_POPULAR_BOOKS,
		books: json.books.map(child => child),
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

export function getBook(id) {

	return (dispatch)  =>  {
		dispatch(requestBook(id))
		return mockFetchBook()
			.then((x) => dispatch(receiveBook(id)))
			.catch(err => { throw err })
	}
}
