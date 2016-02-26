import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/lib/app-bar'

import { connect } from 'react-redux'
import { requestTopMenuTitle } from '../actions/books'

class TopMenu extends Component {
	componentDidMount() {
		const { dispatch } = this.props
		dispatch(requestTopMenuTitle())
    }
	render() {
		const {title} = this.props
		console.log(this.props)
		let msg = title || "Default"
		return (
				<AppBar
			title={msg}
			iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
		)
	}
}


TopMenu.propTypes = {
	title: PropTypes.string.isRequired
}


function mapStateToProps(state) {
	const { title } =  state.books
	return {
		title: title
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: dispatch
	}
}
export default connect(mapStateToProps)(TopMenu)
