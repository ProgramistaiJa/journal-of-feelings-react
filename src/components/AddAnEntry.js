import React from 'react'
import {connect} from 'react-redux'
import {updateEntry, createEntry, addFeeling} from '../state/entries'
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
    Row
} from 'react-bootstrap'





class AddAnEntry extends React.Component {

    state = {
        uid: this.props.uid || null,
        date: this.props.date || moment().format('DD-MM-YYYY'),
        feelings: this.props.feelings || '',
        when: this.props.when || '',
        thoughts: this.props.thoughts || '',
        allfeelings:{
                    miłość: [
                            'miłość',
                            'ciepło',
                            'serdeczność',
                            'podziw',
                            'czułość',
                            'pociąg',
                            'przyjaźń',
                            'fascynacja',
                            'troskliwość'
                            ],

                    pragnienie: [
                            'pragnienie',
                            'tęsknota',
                            'nienasycenie',
                            'pożadanie',
                            'potrzeba',
                            'ciekawość',
                            'dociekliwość'
                            ],


                    nadzieja: [
                            'nadzieja',
                            'wyczekiwanie',
                            'wiara',
                            'ufność',
                            'pewność siebie',
                            'pogoda ducha',
                            'akceptacja',
                            'współczucie'
                            ],

                    radość: [
                            'radość',
                            'szczęście',
                            'zadowolenie',
                            'przyjemność',
                            'satysfakcja',
                            'spełnienie',
                            'wesołość',
                            'zachwyt',
                            'spokój wewnętrzny',
                            'łagodność',
                            'odprężenie',
                            'ulga',
                            'wdzięczność'
                            ],

                    nienawiść : [
                            'nienawiść',
                            'obojętność',
                            'odraza',
                            'niechęć',
                            'obcość',
                            'pogarda',
                            'lekceważenie',
                            'zawiść',
                            'zazdrość'
                            ],

                    awersja : [
                            'awersja',
                            'odwrócenie się',
                            'wyobcowanie się',
                            'odrzucenie'
                            ],

                    rozpacz : [
                            'rozpacz',
                            'zwątpienie',
                            'sceptycyzm',
                            'podejrzliwość',
                            'znięchęcenie',
                            'niezadowolenie',
                            'przygnębienie',
                            'bezradność',
                            'zagubienie',
                            'poczucie klęski',
                            'bezsilność'
                            ],

                    smutek : [
                            'smutek',
                            'żal',
                            'niezadowolenie',
                            'przykrość',
                            'rozżalenie',
                            'strapienie',
                            'uraza',
                            'poczucie krzywdy',
                            'przygnębienie',
                            'wstyd',
                            'zakłopotanie',
                            'upokorzenie',
                            'przejęcie'
                            ],

                    odwaga: [
                            'odwaga',
                            'śmiałość',
                            'dzielność',
                            'cierpliwość',
                            'wytrwałość',
                            'pewność siebie',
                            'pewność',
                            'zuchwałość',
                            'zadziorność'
                            ],

                    strach : [
                            'strach',
                            'przerażenie',
                            'panika',
                            'lęk',
                            'przestrach',
                            'zastraszenie',
                            'obawa',
                            'niepokój',
                            'nerwowość',
                            'niecierpliwość',
                            'zdenerwowanie',
                            'zatrwożenie',
                            'zmartwienie',
                            'niepewność',
                            'nieufność',
                            'zdumienie',
                            'zaskoczenie'
                            ],

                    złość : [
                            'złość',
                            'furia',
                            'wściekłość',
                            'gniew',
                            'oburzenie',
                            'irytacja',
                            'strapienie',
                            'uraza',
                            'wrogość',
                            'niechęć',
                            'rozdrażnienie'
                            ]
                    }
    }

    handleSubmit = event => {
        const {uid, date, allfeelings, feelings, when, thoughts} = this.state

        event.preventDefault()

        if (uid === null) {
            this.props.createEntry({date, allfeelings, feelings, when, thoughts})
            this.setState({
                date: '',
                feelings: '',
                allfeelings: '',
                when: '',
                thoughts: ''
            })
        } else {
            this.props.updateEntry(uid, {date, feelings, allfeelings, when, thoughts})
        }
    }

    render() {

        return (
            <div>
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

                    <h2>Feelings</h2>

                    <div>
                        {Object.keys(this.state.allfeelings)
                            .map((feeling) =>
                                <Row key={feeling}>
                                    {
                                        this.state.allfeelings[feeling]
                                            .map((feeling) =>
                                                <Col key={feeling} sm={6} md={3} lg={2}>
                                                    <Button
                                                        key={feeling}
                                                        value={feeling}
                                                        onClick={this.props.handleAddFeelingClick}
                                                        //onClick={console.log({feeling})}
                                                    >{feeling}
                                                    </Button>
                                                </Col>
                                            )
                                    }
                                </Row>
                            )
                        }
                    </div>







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
        handleAddFeelingClick: event => dispatch(addFeeling(event)),
        createEntry: data => dispatch(createEntry(data)),
        updateEntry: (uid, data) => dispatch(updateEntry(uid, data))
    })
)(AddAnEntry)