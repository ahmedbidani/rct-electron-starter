import React from 'react'
import styles from './signin.css'
import Logo from './logo.png'

/**
 * Class represontant le formaulire de connexion
 */
export class SignIn extends React.Component {

  /**
   *
   * @param props
   */
  constructor (props){
    super(props)
  }

  /**
   * Rendre la vue
   * @return {HTML | JSX }
   */
  render()
  {
    return(
      <div className={styles.signInWrapper}>
        <div className={styles.loginImageWrapper}>
          <img src={Logo} alt="login" className={styles.loginImage} />
        </div>
        <form onSubmit={this.submitForm}>
          <div className="card bg-light mb-3" style={{width: '20rem'}}>
            <div className="card-header text-center">
              <h5 className="text-uppercase font-weight-bold">
                espace privée <i>(GIMS)</i>
              </h5>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="login">Login</label>
                <input type="text" className="form-control" id="login" placeholder="Entrer login"
                    ref="login" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" className="form-control" id="password" placeholder="Entrer mot de passe"
                    ref="password"/>
              </div>
            </div>
            <div className="card-footer">
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Se connecter</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}