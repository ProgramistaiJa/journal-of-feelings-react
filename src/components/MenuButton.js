import React from 'react'
import {
    Button,
    Glyphicon
} from 'react-bootstrap'
import './MenuButton.css';


export default class MenuButton extends React.Component {

    render() {
        return (
            <div className="MenuButton">
                <Button bsStyle="primary" bsSize="large" block>
                    <a className="white" href={this.props.href}><Glyphicon glyph={this.props.glyph} />{this.props.value}</a>
                </Button>
            </div>
        )
    }
}
