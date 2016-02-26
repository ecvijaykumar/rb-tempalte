import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { initBooks } from '../actions/books'
import  TopMenu  from '../components/TopMenu'

class App extends Component {
	componentDidMount() {
		initBooks()
	}
	componentWillReceiveProps() {
	}
	render() {
		const { children } = this.props
		return (
			<div>
				<TopMenu title="Hello"/>
				{children}
			</div>
		)
	}
}

App.propTypes = {
	push: PropTypes.func.isRequired,
	children: PropTypes.node
}


function mapStateToProps(state) {

	const { isFetching, lastUpdate, books } = state.books
	return {
		isFetching: isFetching,
		lastUpdate: lastUpdate,
		books: books
	}
}

export default connect(mapStateToProps, {push})(App)
