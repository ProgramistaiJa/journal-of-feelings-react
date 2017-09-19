import React from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../state/entries'
import moment from 'moment'
import MainMenu from "./MainMenu"
import {
  Button,
  FormGroup,
  Form,
  Col,
  ControlLabel,
  FormControl,
  Grid,
  Row
} from 'react-bootstrap'

import feelings from '../utils/feelings'

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  selectedFeelings: [],
  when: '',
  thoughts: ''
}

class AddAnEntry extends React.Component {

  state = initialState

  handleSubmit = event => {
    event.preventDefault()

    this.props.createEntry(this.state)
    this.setState(initialState)
  }

  handleChange = event => this.setState({
    [event.currentTarget.name]: event.currentTarget.value
  })

  handleToggleFeelingClick = event => {
    const feelingName = event.currentTarget.dataset.feeling
    const selectedFeelings = this.state.selectedFeelings
    this.setState({
      selectedFeelings: selectedFeelings.includes(feelingName) ? selectedFeelings.filter(
        feeling => feeling !== feelingName
      ) : selectedFeelings.concat(feelingName)
    })
  }

  render() {
    const { date, when, selectedFeelings, thoughts } = this.state
    const { handleSubmit, handleChange, handleToggleFeelingClick } = this

    return (
      <div>
        <MainMenu/>
        <Grid>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={12}>
                Date
              </Col>
              <Col sm={12}>
                <FormControl
                  type="date"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={handleChange}
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
                  name="when"
                  value={when}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>

            <h2>Feelings</h2>

            <div>
              {
                Object.entries(feelings).map(
                  ([key, value]) => (
                    <Row key={key} style={{ marginTop: 20, paddingBottom: 20, borderBottom: '1px solid black' }}>
                      {
                        value.map(
                          feeling => (
                            <Col key={feeling} sm={6} md={3} lg={2}>
                              <Button
                                block
                                data-feeling={feeling}
                                active={selectedFeelings.includes(feeling)}
                                onClick={handleToggleFeelingClick}
                              >
                                {feeling}
                              </Button>
                            </Col>
                          )
                        )
                      }
                    </Row>
                  )
                )
              }
            </div>

            <FormGroup controlId="formControlsTextarea">
              <Col componentClass={ControlLabel} sm={12}>
                My thoughts
              </Col>
              <Col sm={12}>
                <FormControl
                  componentClass="textarea"
                  placeholder="Your thoughts"
                  name="thoughts"
                  value={thoughts}
                  onChange={handleChange}
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
        </Grid>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    createEntry: data => dispatch(createEntry(data))
  })
)(AddAnEntry)