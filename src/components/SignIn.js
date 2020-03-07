import React from 'react'
import './styles.css'
import Logo from './logo.png'
import { withRouter } from "react-router-dom";

/**
 * Class represontant le formaulire de connexion
 */
class SignIn extends React.Component {

	/**
	 *
	 * @param props
	 */
	constructor(props) {
		super(props)
		this.state = { login: '', password: ''}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit() {
		this.props.history.push('/dashboard')
	}

	/**
	 * Rendre la vue
	 * @return {HTML | JSX }
	 */
	render() {
		return (
			<div className='container'>
				<div className='logoWrapper'>
					<img src={Logo} alt="login" className='loginImage' />
				</div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="card bg-light mb-3" style={{ width: '20rem' }}>
						<div className="card-header text-center">
							<h5 className="text-uppercase font-weight-bold">
								espace privée <i>(BREAK QUEUE APP)</i>
							</h5>
						</div>
						<div className="card-body">
							<div className="form-group">
								<label htmlFor="login">Login</label>
								<input type="text" className="form-control" id="login" placeholder="Enter login"
									ref="login" />
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" id="password" placeholder="Enter password"
									ref="password" />
							</div>
						</div>
						<div className="card-footer">
							<div className="form-group">
								<button type="submit" className="btn btn-warning btn-lg btn-block">Se connecter</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default withRouter(SignIn)