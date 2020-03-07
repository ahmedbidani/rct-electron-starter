import React from 'react'
import './styles.css'
import Logo from './logo.png'

/**
 * Class represontant le formaulire de connexion
 */
export class AddUser extends React.Component {

	/**
	 *
	 * @param props
	 */
    constructor(props) {
        super(props)
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
                <form onSubmit={this.handleSubmit}>
                    <div className="card bg-light mb-3" style={{ width: '20rem' }}>
                        <div className="card-header text-center">
                            <h5 className="text-uppercase font-weight-bold">
                                ADD USER
							</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="login">Full Name</label>
                                <input type="text" className="form-control" id="login" placeholder="Enter Full Name"
                                    ref="login" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="login">Login</label>
                                <input type="text" className="form-control" id="login" placeholder="Enter login"
                                    ref="login" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="password">Role</label>
                                <select class="custom-select">
                                    <option selected="">Select user role</option>
                                    <option value="1">ADMIN</option>
                                    <option value="2">USER</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password"
                                    ref="password" />
                            </div>
                            <div class="form-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile02" />
                                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-warning btn-lg btn-block">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}