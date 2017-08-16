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
                    value="Add an Entry"
                    href="./add-an-entry"
                    glyph="star"
                />
                <MenuButton
                    value="Entries"
                    href=""
                    glyph="star"
                />
                <MenuButton
                    value="Settings"
                    href=""
                    glyph="star"
                />
            </div>
        )
    }
}
