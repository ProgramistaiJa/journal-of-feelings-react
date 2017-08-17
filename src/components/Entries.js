import React from 'react'
import {connect} from 'react-redux'
import {deleteEntry} from '../state/entries'
import {fetchEntries} from '../state/fetchingdata'
import MainMenu from "./MainMenu";
import {Table, Button} from 'react-bootstrap'


export default connect(
    state => ({
        entries: state.entries
    }),

    dispatch => ({
        handleDeleteEntryClick: event => dispatch(deleteEntry(event.target.dataset.uid)),
        fetchEntries: () => dispatch(fetchEntries())
    })
)(

class Entries extends React.Component {

    state = {

    }

    componentWillMount() {
        this.props.fetchEntries()
    }

    render (){

        const {data} = this.props.entries
        if (data === null) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <MainMenu/>
                <h1>Entries</h1>

                <Table bordered striped hover responsive>
                    <thead>
                    <tr>
                        <th className="text-center">data</th>
                        <th className="text-center">Feelings</th>
                        <th className="text-center">When</th>
                        <th className="text-center">Usuń</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data !== null && data
                                        .sort((a, b) => (new Date(b.date)) - (new Date(a.date)))
                                        .map(entry => (
                                <tr key={entry.id}>
                                    <td>
                                        { entry.date }
                                    </td>
                                    <td className="text-center">
                                        { (entry.feelings) }
                                    </td>
                                    <td className="text-center">
                                        { entry.when }
                                    </td>
                                    <td>
                                        <Button
                                            className="delete"
                                            data-uid={entry.uid}
                                            onClick={this.props.handleDeleteEntryClick}>
                                            Usuń
                                        </Button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>
            </div>
        )
    }

})