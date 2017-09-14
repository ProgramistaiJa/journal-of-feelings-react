import React from 'react'
import {connect} from 'react-redux'
import {updateEntry, createEntry, addFeeling} from '../../state/entries'
import moment from 'moment'
import {
    FormGroup,
    Col,
    ControlLabel,
    FormControl
} from 'react-bootstrap'

class AddDate extends React.Component {

    state = {
        //uid: this.props.uid || null,
        date: this.props.date || moment().format('DD-MM-Y'),
        //feelings: this.props.feelings || '',
        //when: this.props.when || '',
        //thoughts: this.props.thoughts || '',

    }

    render () {
        return (
            //<div className={AddDate}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={12}>
                        Date
                    </Col>
                    <Col sm={12}>
                        <FormControl
                            type="date"
                            placeholder="Date"
                            value={this.state.date}
                            onChange={event => this.setState({
                                date: event.target.value
                            })}
                        />
                    </Col>
                </FormGroup>
            //</div>
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
)(AddDate)