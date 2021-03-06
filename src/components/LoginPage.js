import React from 'react';
import LoginForm from './LoginForm';
import RegisterUser from './RegisterUser'
import {Button} from 'react-bootstrap'
import TransitionGroup from 'react-transition-group/TransitionGroup'

export default  class LoginPage extends React.Component {

  state = {
    showLogin: false,
    showRegister: false
  }

  render() {

    // const showLogin = {
    //   'display': this.state.showLogin ? 'block' : 'none'
    // }
    //
    // const showRegister = {
    //   'display': this.state.showRegister ? 'block' : 'none'
    // }

    const showL = () => {
      this.setState({
        showLogin: !this.state.showLogin,
        showRegister: this.state.showRegister ? false : null
      })
    }

    const showR = () => {
      this.setState({
        showRegister: !this.state.showRegister,
        showLogin: this.state.showLogin ? false : null
      })
    }

    return (
      <div className="row">
        <div className="loginLogo"></div>
        <div className="col-md-4 col-md-offset-4 ">
          <div>
            <Button
              block
              bsStyle="warning"
              className="horizontal"
              onClick={showL}
            >Panel logowania</Button>

            <Button
              block
              bsStyle="warning"
              className="horizontal"
              onClick={showR}
            >Załóż konto</Button>
          </div>

          <TransitionGroup>
            { this.state.showLogin ? <LoginForm /> : null }
            { this.state.showRegister ? <RegisterUser/> : null }
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

