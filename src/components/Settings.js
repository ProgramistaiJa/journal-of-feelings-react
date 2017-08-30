import React from 'react'
import Feelings from './Feelings'
import MainMenu from "./MainMenu";

export default class Settings extends React.Component {
    state = {

    }

    render () {
        return (
            <div>
                <MainMenu/>
                <h1>Settings</h1>
                <Feelings />
            </div>
        )
    }
}