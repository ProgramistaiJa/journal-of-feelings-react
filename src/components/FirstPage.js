/**
 * Created by artur on 05.07.17.
 */
import React from 'react'
import MainMenu from './MainMenu'
import MenuButton from './MenuButton'


export default class FirstPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="FirstPage">
                <MainMenu/>
                <MenuButton
                    value="Add an Entry - Dodaj Wpis"
                    href="./components/AddAnEntry.js"
                />
                <MenuButton
                    value="Entries - Przeglądaj Wpisy"
                    href=""
                />
                <MenuButton
                    value="Settings"
                    href=""
                />
            </div>
        )
    }
}
