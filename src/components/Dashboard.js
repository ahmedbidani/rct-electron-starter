import React from 'react'
import './styles.css'
import Logo from './logo.png'
import QueueIcon from './queue.png'
import AddIcon from './add.png'
import Setting from './setting.png'
import { Link } from "react-router-dom"

/**
 * Class represontant le formaulire de connexion
 */
export class Dashboard extends React.Component {

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
                <div className='buttonsWrapper'>
                    <Link to="/queue-break" className='buttonWrapper'>
                        <div className='buttonInnerWrapper'>
                            <img src={QueueIcon} className='buttonIcon' />
                            <div className='buttonTitle'>
                                <span>Queue Break Room</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/user-profile" className='buttonWrapper'>
                        <div className='buttonInnerWrapper'>
                            <img src={Setting} className='buttonIcon' />
                            <div className='buttonTitle'>
                                <span>User Profile</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/add-user" className='buttonWrapper'>
                        <div className='buttonInnerWrapper'>
                            <img src={AddIcon} className='buttonIcon' />
                            <div className='buttonTitle'>
                                <span>Add user account</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}