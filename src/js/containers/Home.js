import React, { Component, PropTypes } from 'react'

import Tenants from './Tenants'
import Books from './TopBooks'
import Accounts from './Accounts'

class Home extends Component {

	render() {
		return (
			<div>
				<Accounts/>
				<Tenants/>
				<Books/>
			</div>
		)
	}
}

export default Home
