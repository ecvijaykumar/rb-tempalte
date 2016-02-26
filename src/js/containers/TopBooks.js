import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { connect } from 'react-redux'
import { initBooks } from '../actions/books'

class TopBooks extends Component {
	componentDidMount() {
		console.log("TopBooks porps", this.props)
		const { dispatch } = this.props
		dispatch(initBooks())
	}
	componentWillReceiveProps() {
	}
	renderBooks() {
		const {books} = this.props
		if (!books.length) {
			return null
		}
		return (
				<ul>
				{ books.map((book, id) => 
							<li key={id}>
							<Link to={`/ShowBook/${id}`}>{book.title}</Link>
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


TopBooks.propTypes = {
	dispatch: PropTypes.func.isRequired
}


function mapStateToProps(state) {
	const { isFetching, lastUpdate, books } = state.books
	return {
		isFetching: isFetching,
		lastUpdate: lastUpdate,
		books: books
	}
}

export default connect(mapStateToProps)(TopBooks)
