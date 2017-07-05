import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css
// import logo from './logo.svg'
import FirstPage from './components/FirstPage'
import './App.css'
import './components/MenuButton.css'



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          <FirstPage/>
      </div>
    )
  }
}
