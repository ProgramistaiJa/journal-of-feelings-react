import React from 'react'

export default class Feelings extends React.Component {
    state = {
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

        nienawiść :
                [
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

        awersja :
                [
                'awersja',
                'odwrócenie się',
                'wyobcowanie się',
                'odrzucenie'
                ],

        rozpacz :
                [
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

        smutek :
                [
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

        odwaga:
                [
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

        strach :
                [
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

        złość :
                [
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

    render () {
        //const {data} = this.state.feelings
        return (
            <div>
                <h1>Feelings</h1>
                <div>{(this.state.miłość).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.pragnienie).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.nadzieja).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.radość).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.nienawiść).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.awersja).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.rozpacz).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.smutek).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.odwaga).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.strach).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>
                <div>{(this.state.złość).map((feeling, index)=><p key={index}>{feeling}</p>)}</div>


            </div>
        )
    }
}