import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import FirstPage from './FirstPage'
import './App.css'
import AddAnEntry from "./AddAnEntry";



export default class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="App">



                <hr/>

                <Route exact path="/" component={FirstPage}/>
                <Route path="/add-an-entry" component={AddAnEntry}/>
            </div>
        </Router>
    )
  }
}