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
  FormControl,
  Grid,
  Row,
    Panel
} from 'react-bootstrap'

import feelings from '../utils/feelings'

const initialState = {
  date: moment().format('YYYY-MM-DD'),
  selectedFeelings: [],
  when: '',
  thoughts: '',
  openFeelings: false,
  openDate: false,
  openSituation: false,
  openthoughts: false
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
            <Row>
              <p>Click the button to enter the data</p>
              <div>
                <Button bsStyle="primary" className="collapsiblebutton" onClick={ ()=> this.setState({ openDate: !this.state.openDate })}>
                  Date
                </Button>
                <Panel className="collapsiblepanel" collapsible expanded={this.state.openDate}>
                    <FormControl
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={date}
                        onChange={handleChange}
                    />
                </Panel>
              </div>
            </Row>
            <Row>
              <div>
                <Button bsStyle="primary" className="collapsiblebutton" onClick={ ()=> this.setState({ openSituation: !this.state.openSituation })}>
                  Situation
                </Button>
                <Panel className="collapsiblepanel" collapsible expanded={this.state.openSituation}>
                  <FormControl
                      componentClass="textarea"
                      placeholder="Describe the situation"
                      name="when"
                      value={when}
                      onChange={handleChange}
                  />
                </Panel>
              </div>
            </Row>

            <Row>
              <Button bsStyle="primary" className="collapsiblebutton" onClick={ ()=> this.setState({ openFeelings: !this.state.openFeelings })}>
                My Feelings
              </Button>
              <Panel className="collapsiblepanel" collapsible expanded={this.state.openFeelings}>

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

              </Panel>
            </Row>


            <Row>
              <div>
                <Button bsStyle="primary" className="collapsiblebutton" onClick={ ()=> this.setState({ openthoughts: !this.state.openthoughts })}>
                  My thoughts
                </Button>
                <Panel className="collapsiblepanel" collapsible expanded={this.state.openthoughts}>
                  <FormControl
                      componentClass="textarea"
                      placeholder="Your thoughts"
                      name="thoughts"
                      value={thoughts}
                      onChange={handleChange}
                  />
                </Panel>
              </div>
            </Row>
            <Row>
            <FormGroup>
              <Col sm={12}>
                <Button bsStyle="warning" className="submitbutton" type="submit">
                  Add an Entry
                </Button>

              </Col>
            </FormGroup>
            </Row>
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