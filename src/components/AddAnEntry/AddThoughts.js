import React from 'react'
import {
    FormGroup,
    Col,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

class AddThoughts extends React.Component {

    state = {
        //uid: this.props.uid || null,
        //date: this.props.date || moment().format('DD-MM-Y'),
        //feelings: this.props.feelings || '',
        //when: this.props.when || '',
        //thoughts: this.props.thoughts || '',

    }

    render () {
        return (
            <FormGroup controlId="formControlsTextarea">
                <Col componentClass={ControlLabel} sm={12}>
                    My thoughts
                </Col>
                <Col sm={12}>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Your thoughts"
                        value={this.props.thoughts}
                        onChange={event => this.setState({
                            thoughts: event.target.value
                        })}
                    />
                </Col>
            </FormGroup>
        )
    }
}
export default AddThoughts