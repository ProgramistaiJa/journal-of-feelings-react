import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    // NavDropdown,
    // MenuItem,
    Glyphicon
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import firebase from 'firebase'

export default class MainMenu extends React.Component {

    render() {
        return (
            <div className="MainMenu">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Journal Of Feelings</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/add-an-entry">
                                <NavItem eventKey={1}><Glyphicon glyph="star" />Add An Entry</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/entries">
                                <NavItem eventKey={2}><Glyphicon glyph="star" />Entries</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2} href="#"><Glyphicon glyph="star" />Settings</NavItem>
                            <NavItem
                                onClick={() => firebase.auth().signOut()}>
                                Wyloguj
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}