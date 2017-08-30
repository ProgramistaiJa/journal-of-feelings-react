import React from 'react'

export default class Feelings extends React.Component {
    state = {
        feelings: [
                'miłość',
                'ciepło',
                'serdeczność',
                'podziw',
                'czułość',
                'pociąg',
                'przyjaźń',
                'fascynacja',
                'troskliwość'
                ]

        /* miłość
                ciepło,
                serdeczność,
                podziw,
                czułość,
                pociąg,
                przyjaźń,
                fascynacja,
                troskliwość

            pragnienie
                tęsknota,
                nienasycenie,
                pożadanie,
                potrzeba,
                ciekawość,
                dociekliwość

            nadzieja
                wyczekiwanie,
                wiara,
                ufność,
                pewność siebie,
                pogoda ducha,
                akceptacja,
                współczucie

            radość
                szczęście,
                zadowolenie,
                przyjemność,
                satysfakcja,
                spełnienie,
                wesołość,
                zachwyt,
                spokój wewnętrzny,
                łagodność,
                odprężenie,
                ulga,
                wdzięczność

            nienawiść
                obojętność,
                odraza,
                niechęć,
                obcość,
                pogarda,
                lekceważenie,
                zawiść,
                zazdrość

            awersja
                odwrócenie się,
                wyobcowanie się,
                odrzucenie

            rozpacz
                zwątpienie,
                sceptycyzm,
                podejrzliwość,
                znięchęcenie,
                niezadowolenie,
                przygnębienie,
                bezradność,
                zagubienie,
                poczucie klęski,
                bezsilność

            smutek
                żal,
                niezadowolenie,
                przykrość,
                rozżalenie,
                strapienie,
                uraza,
                poczucie krzywdy,
                przygnębienie,
                wstyd,
                zakłopotanie,
                upokorzenie,
                przejęcie

            odwaga
                śmiałość,
                dzielność,
                cierpliwość,
                wytrwałość,
                pewność siebie,
                pewność,
                zuchwałość,
                zadziorność

            strach
                przerażenie,
                panika,
                lęk,
                przestrach,
                zastraszenie,
                obawa,
                niepokój,
                nerwowość,
                niecierpliwość,
                zdenerwowanie,
                zatrwożenie,
                zmartwienie,
                niepewność,
                nieufność,
                zdumienie,
                zaskoczenie

            złość
                furia,
                wściekłość,
                gniew,
                oburzenie,
                irytacja,
                strapienie,
                uraza,
                wrogość,
                niechęć,
                rozdrażnienie */
    }

    render () {
        const {data} = this.state
        return (
            <div>
                <h1>Feelings</h1>
                <p>{this.state.feelings}</p>
                <p>{this.state.feelings[0]}</p>
                {
                    data === null ? 'data === null' : 'data !== null'

                }

            </div>
        )
    }
}