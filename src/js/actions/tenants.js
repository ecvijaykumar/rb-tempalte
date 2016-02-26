import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

import * as types from '../constants/ActionTypes'

export const requestTenantList = () => {
	return {
		type: types.REQUEST_TENANT_LIST
	}
}
