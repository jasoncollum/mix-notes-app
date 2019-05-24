import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import NotesList from './notes/NotesList'

class ApplicationViews extends Component {
    notesFromAPI = [
        { id: 1, title: "Gorgeous", version: 2, changes: "vocal up 1db", comments: "Singer wants to be louder - I think it's a bad idea, but it's their song." }
    ]

    state = {
        notes: this.notesFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <NotesList notes={this.state.notes} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews