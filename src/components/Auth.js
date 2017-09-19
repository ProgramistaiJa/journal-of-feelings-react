import React from 'react'
import { connect } from 'react-redux'
import LoginPage from "./LoginPage";


const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div>
      <LoginPage/>
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)