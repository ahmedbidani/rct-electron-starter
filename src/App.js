import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn"
import { Dashboard } from "./components/Dashboard"
import { UserProfile } from "./components/UserProfile"
import { QueueBreak } from "./components/QueueBreak"
import { AddUser } from "./components/AddUser"
import "./App.css"

export default function App() {
	return (
		<div className='wrapper'>
			<Router>
				<Switch>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/user-profile'>
						<UserProfile />
					</Route>
					<Route path='/queue-break'>
						<QueueBreak />
					</Route>
					<Route path='/add-user'>
						<AddUser />
					</Route>
					<Route path='/'>
						<SignIn />
					</Route>

				</Switch>
			</Router>
		</div>
	)
}
