import React from 'react'
import Feelings from './SettingsFeelings'
import MainMenu from "../MainMenu/indeks";

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