import React from 'react'
import {
    FormGroup,
    Col,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

class AddSituation extends React.Component {

    state = {
        //uid: this.props.uid || null,
        //date: this.props.date || moment().format('DD-MM-Y'),
        //feelings: this.props.feelings || '',
        when: this.props.when || '',
        //thoughts: this.props.thoughts || '',

    }

    render () {
        return (
            <FormGroup controlId="formControlsTextarea">
                <Col componentClass={ControlLabel} sm={12}>
                    Situation
                </Col>
                <Col sm={12}>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Describe the situation"
                        value={this.props.when}
                        onChange={event => this.setState({
                            when: event.target.value
                        })}
                    />
                </Col>
            </FormGroup>
        )
    }
}
export default AddSituation