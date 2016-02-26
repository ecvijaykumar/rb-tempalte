import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { getBook } from '../actions/books'

class ShowBook extends Component {
	componentDidMount() {
		const { dispatch, book_id }  = this.props
		dispatch(getBook(book_id))
	}
	componentWillReceiveProps() {
	}
	render() {
		const { isLoading, title, fromPage, toPage, book_id } = this.props
		
		if (isLoading) {
			return (
					<h2> Loading Book {book_id} </h2>
			)
		}

		return (
				<div>
				<h2>Title {title} from {fromPage} to {toPage} </h2>
				</div>
		)
	}
}


ShowBook.propTypes = {
	dispatch: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
}


function mapStateToProps(state, props) {

	const { title, fromPage, toPage, isLoading } = state.books.book
	const { id } = props.params
	
	return {
		isLoading: isLoading,
		title : title,
		fromPage: fromPage,
		toPage: toPage,
		book_id: id
	}
}

export default connect(mapStateToProps)(ShowBook)
