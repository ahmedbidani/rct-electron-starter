import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn"
import styles from "./App.css"

export default function App() {
	return (
		<div className={styles.wrapper}>
			<Router>
				<Switch>
					<Route path='/'>
						<SignIn />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}
