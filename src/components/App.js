import React, { } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import FirstPage from './FirstPage'
import './App.css'
import AddAnEntry from "./AddAnEntry"
import Entries from "./Entries"
import Settings from "./Settings"


export default class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={FirstPage}/>
                <Route path="/add-an-entry" component={AddAnEntry}/>
                <Route path="/entries" component={Entries}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </Router>
    )
  }
}