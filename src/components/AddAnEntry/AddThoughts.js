import React from 'react'
import {connect} from 'react-redux'
import {updateEntry, createEntry, addFeeling} from '../../state/entries'
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
export default connect(
    state => ({
        entries: state.entries.data
    }),
    dispatch => ({
        handleAddFeelingClick: event => dispatch(addFeeling(event.target.value)),
        createEntry: data => dispatch(createEntry(data)),
        updateEntry: (uid, data) => dispatch(updateEntry(uid, data))
    })
)(AddThoughts)