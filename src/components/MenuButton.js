/**
 * Created by artur on 05.07.17.
 */
import React from 'react'
import {Button} from 'react-bootstrap'


export default class MenuButton extends React.Component {

    render() {
        return (
            <div className="MenuButton">
                <Button bsStyle="primary" bsSize="large" block>
                    <a href={this.props.href}>{this.props.value}</a>
                </Button>
            </div>
        )
    }
}
