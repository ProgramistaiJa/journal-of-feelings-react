import React from 'react'
import {
    FormGroup,
    Col,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

class AddFeeling extends React.Component {

    state = {
        //uid: this.props.uid || null,
        //date: this.props.date || moment().format('DD-MM-Y'),
        //feelings: this.props.feelings || '',
        //when: this.props.when || '',
        //thoughts: this.props.thoughts || '',

    }

    render (){
        return (
            <FormGroup controlId="formControlsTextarea">
                <Col componentClass={ControlLabel} sm={12}>
                    My feelings
                </Col>
                <Col sm={12}>
                    <FormControl
                        componentClass="textarea"
                        placeholder="Your feelings"
                        value={this.props.feelings}
                        onChange={event => this.setState({
                            feelings: event.target.value
                        })}
                    />
                </Col>
            </FormGroup>
        )
    }
}
export default AddFeeling