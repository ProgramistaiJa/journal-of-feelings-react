import React from 'react'
import {connect} from 'react-redux'
import {updateEntry, createEntry, addFeeling} from '../../state/entries'
import moment from 'moment'
import MainMenu from "../MainMenu/indeks"
import {
    Button,
    FormGroup,
    Form,
    Col,
    ControlLabel,
    FormControl,
    //Grid
    //Row
} from 'react-bootstrap'
import AddDate from "./AddDate";
import AddSituation from "./AddSituation";
import AddFeeling from "./AddFeeling";
import AddThoughts from "./AddThoughts";
//import AddFeelings from "./AddFeelings";



class AddAnEntry extends React.Component {

    state = {
        uid: this.props.uid || null,
        date: this.props.date || moment().format('DD-MM-Y'),
        feelings: this.props.feelings || '',
        when: this.props.when || '',
        thoughts: this.props.thoughts || '',

    }

    handleSubmit = event => {
        const {uid, date, /*allfeelings,*/ feelings, when, thoughts} = this.state

        event.preventDefault()

        if (uid === null) {
            this.props.createEntry({date, /*allfeelings,*/ feelings, when, thoughts})
            this.setState({
                date: '',
                feelings: '',
                // allfeelings: '',
                when: '',
                thoughts: ''
            })
        } else {
            this.props.updateEntry(uid, {date, feelings, /*allfeelings,*/ when, thoughts})
        }
    }

    render() {

        return (
            <div>
                <MainMenu/>
                <Form onSubmit={this.handleSubmit}>

                    <AddDate value={this.state.date}/>

                    <p>feelings when</p>

                    <AddSituation value={this.state.when} />

                    {/*<AddFeelings/>*/}

                    <AddFeeling value={this.state.feelings}/>
                    <AddThoughts value={this.state.thoughts}/>
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
        handleAddFeelingClick: event => dispatch(addFeeling(event.target.value)),
        createEntry: data => dispatch(createEntry(data)),
        updateEntry: (uid, data) => dispatch(updateEntry(uid, data))
    })
)(AddAnEntry)