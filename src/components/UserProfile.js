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
export class UserProfile extends React.Component {

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
                
            </div>
        )
    }
}