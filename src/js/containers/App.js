import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {initBooks} from '../actions/books'

class App extends Component {
	componentDidMount() {
		const {dispatch}  = this.props
		console.log(initBooks)
		dispatch(initBooks())
	}
	componentWillReceiveProps() {
	}
	renderBooks() {
		const {books} = this.props
		console.log(this.props)
		console.log("Received Books: ", books)
		if (!books.length) {
			return (<div></div>)
		}
		return (
				<ul>
				{ books.map((book, id) => 
							<li key={id}>
							<h2> {book.title}</h2>
							</li>
						   )}
			</ul>
		)
	}
	render() {

		const {isFetching, lastUpdate} = this.props
		return (
				<div>
				<h2> Fetching {isFetching} </h2>
				<h1>Hello, world. {lastUpdate} </h1>
				{this.renderBooks()}
				</div>
		)
	}
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {

	const {isFetching, lastUpdate, books} = state.books
	return {
		isFetching: isFetching,
		lastUpdate: lastUpdate,
		books: books
	}
}

export default connect(mapStateToProps)(App)
