import * as types from '../constants/ActionTypes'

const tenantState = {
	isFetching: false,
	tenants:[],
	title: "Tenants"
}
export default function tenants(state = {}, action) {
	switch(action.type) {
		case types.REQUEST_TENANT_LIST:
		return Object.assign({}, state, {
			isFetching: true
		})
	default:
		return state
	}
}
