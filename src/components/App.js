import React, { } from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import FirstPage from './FirstPage/indeks'
import './App.css'
import AddAnEntry from "./AddAnEntry/indeks"
import Entries from "./Entries/indeks"
import Settings from "./Settings/indeks"


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