import React from 'react'
import {
    Button,
    Col,
    Row
} from 'react-bootstrap'

class AddFeelings extends React.Component {

    state = {
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
        },
        addedfeelings:[]
    }

    handleAddFeelingClick = () => this.setState({addedfeelings: this.state.addedfeelings.concat(this.value)})
    //this.setState({arrayvar: this.state.arrayvar.concat([newelement])})
    //this.setState({arrayvar: [...this.state.arrayvar, newelement]})


    render () {
        return(
            <div>
                <h2>Feelings1</h2>
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
                                                onClick={ handleAddFeelingClick(this.value) }
                                            >{feeling}
                                            </Button>
                                        </Col>
                                    )
                            }
                        </Row>
                    )
                }
            </div>
        )
    }
}
export default AddFeelings