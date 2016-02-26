import React, { Component, PropTypes } from 'react'

import Trash from '../components/Trash'
import Gas from '../components/Gas'
import Internet from '../components/Internet'

class Accounts extends Component {
	render() {
		return (
				<div>
				<Gas/>
				<Internet/>
				<Trash/>
				</div>
		)
			
	}
}

export default Accounts
