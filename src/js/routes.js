import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import TopBooks from './containers/TopBooks'
import ShowBook from './containers/ShowBook'
import Tenants from './containers/Tenants'
import Home from './containers/Home'


export default (
		<Route path="/" component={App} >
		<IndexRoute component={Home} />
		<Route path="TopBooks" component={TopBooks} />
		<Route path="ShowBook/:id" component={ShowBook} />
		</Route>
)

