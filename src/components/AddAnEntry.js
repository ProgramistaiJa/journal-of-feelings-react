import React from 'react'
import {connect} from 'react-redux'
import {updateEntry, createEntry} from '../state/entries'
import moment from 'moment'
import MainMenu from "./MainMenu"
import {
    Button,
    FormGroup,
    Form,
    Col,
    ControlLabel,
    FormControl,
} from 'react-bootstrap'





class AddAnEntry extends React.Component {

    state = {
        uid: this.props.uid || null,
        date: this.props.date || moment().format('YYYY-MM-D'),
        feelings: this.props.feelings || '',
        when: this.props.when || '',
    }

    handleSubmit = event => {
        const {uid, date, feelings, when} = this.state

        event.preventDefault()

        if (uid === null) {
            this.props.createEntry({date, feelings, when})
            this.setState({
                date: '',
                feelings: '',
                when: ''
            })
        } else {
            this.props.updateEntry(uid, {date, feelings, when})
        }
    }

    render() {
        const entries = this.props.entries === null ? [] : this.props.entries

        return (
            <div className="AddAnEntry">
                <MainMenu/>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Date
                        </Col>
                        <Col sm={10}>
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
                    <p>feelings when</p>

                    <FormGroup controlId="formControlsTextarea">
                        <Col componentClass={ControlLabel} sm={2}>
                            I felt
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                componentClass="textarea"
                                placeholder="Your feelings"
                                value={this.state.feelings}
                                onChange={event => this.setState({
                                    feelings: event.target.value
                                })}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <Col componentClass={ControlLabel} sm={2}>
                            When
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                componentClass="textarea"
                                placeholder="when"
                                value={this.state.when}
                                onChange={event => this.setState({
                                    when: event.target.value
                                })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Add an Entry
                            </Button>

                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(
    state => ({
        entries: state.entries.data
    }),
    dispatch => ({
        createEntry: data => dispatch(createEntry(data)),
        updateEntry: (uid, data) => dispatch(updateEntry(uid, data))
    })
)(AddAnEntry)