import React from 'react'
import './styles.css'
import Logo from './logo.png'
import User from "./man.png"

/**
 * Class represontant le formaulire de connexion
 */
export class QueueBreak extends React.Component {

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
            <div className='container' style={{ display: 'flex', flexDirection: 'row', height: '600px', width: '800px', overflow: 'scroll' }}>
                <div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,flex: 1, color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 1</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 2</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 3</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 4</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 5</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 6</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 7</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 8</h5>
                    </div>
                    <div style={{ margin: '5px', borderRadius: '100px', padding: '8px', display: 'flex', border: '1px dotted #888888', minWidth: '350px', maxWidth: '350px', backgroundColor: '#1f2024', flexDirection: 'row', alignItems: 'center' }}>
                        <img src={User} style={{ width: '45px', height: '45px', backgroundColor: 'white', padding: '2px', borderRadius: '50%' }} />
                        <h5 style={{ margin: 0,color: '#eeeeee', marginLeft: '5px', fontWeight: '600' }}>User of test 9</h5>
                    </div>
                </div>
                <div className='logoWrapper'>
                    <img src={Logo} alt="login" className='loginImage' />
                </div>
            </div>
        )
    }
}