import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { connect } from 'react-redux'
import { requestTenantList } from '../actions/tenants'


class Tenants extends Component {
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(requestTenantList())
	}
	componentWillReceiveProps() {
	}
	render() {
		const { isFetching } = this.props
		let fetchingState = isFetching ? "Yes" : "No"
		return (
				<div>
				<h1> Getting Tenant List {fetchingState} </h1>
				</div>
		)
	}
}

Tenants.propTypes = {
	dispatch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
	const { isFetching } = state.tenants 
	return {
		isFetching: isFetching
	}
}
export default connect(mapStateToProps)(Tenants)
