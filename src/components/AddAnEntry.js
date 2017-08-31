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
    //Grid
} from 'react-bootstrap'





class AddAnEntry extends React.Component {

    state = {
        uid: this.props.uid || null,
        date: this.props.date || moment().format('YYYY-MM-D'),
        feelings: this.props.feelings || '',
        when: this.props.when || '',
        thoughts: this.props.thoughts || ''
    }

    handleSubmit = event => {
        const {uid, date, feelings, when, thoughts} = this.state

        event.preventDefault()

        if (uid === null) {
            this.props.createEntry({date, feelings, when, thoughts})
            this.setState({
                date: '',
                feelings: '',
                when: '',
                thoughts: ''
            })
        } else {
            this.props.updateEntry(uid, {date, feelings, when, thoughts})
        }
    }

    render() {

        return (
            <div >
                <MainMenu/>
                <Form onSubmit={this.handleSubmit}>
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
                    <p>feelings when</p>
                    <FormGroup controlId="formControlsTextarea">
                        <Col componentClass={ControlLabel} sm={12}>
                            Situation
                        </Col>
                        <Col sm={12}>
                            <FormControl
                                componentClass="textarea"
                                placeholder="Describe the situation"
                                value={this.state.when}
                                onChange={event => this.setState({
                                    when: event.target.value
                                })}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsSelectMultiple">
                        <Col componentClass={ControlLabel} sm={12}>
                            My feelings
                        </Col>
                        <Col sm={12}>
                            <FormControl
                                componentClass="select" multiple
                                // value={this.state.multifeelings}
                                // onChange={event => this.setState({
                                //     multifeelings: event.target.value})}
                            >
                                <option value="radosc">radość</option>
                                <option value="smutek">smutek</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <Col componentClass={ControlLabel} sm={12}>
                            My feelings
                        </Col>
                        <Col sm={12}>
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
                        <Col componentClass={ControlLabel} sm={12}>
                            My thoughts
                        </Col>
                        <Col sm={12}>
                            <FormControl
                                componentClass="textarea"
                                placeholder="Your thoughts"
                                value={this.state.thoughts}
                                onChange={event => this.setState({
                                    thoughts: event.target.value
                                })}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={12}>
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