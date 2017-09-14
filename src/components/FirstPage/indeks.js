import React from 'react'
import MainMenu from '../MainMenu/indeks'
import { LinkContainer } from 'react-router-bootstrap'
import MenuButton from '../MainMenu/MenuButton'


export default class FirstPage extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="FirstPage">
                <MainMenu/>
                <LinkContainer to="/add-an-entry">
                    <MenuButton
                        value="Add an Entry"
                        glyph="star"
                    />
                </LinkContainer>
                <LinkContainer to="/entries">
                    <MenuButton
                        value="Entries"
                        glyph="star"
                    />
                </LinkContainer>
                <LinkContainer to="/settings">
                    <MenuButton
                        value="Settings"
                        glyph="star"
                    />
                </LinkContainer>
            </div>
        )
    }
}
