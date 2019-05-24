import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotesList from './components/notes/NotesList'
import './index.css';

class Home extends Component {
    notesFromAPI = [
        { id: 1, title: "Gorgeous", version: 2, changes: "vocal up 1db", comments: "Singer wants to be louder - I think it's a bad idea, but it's their song." }
    ]

    state = {
        notes: this.notesFromAPI
    }

    render() {
        return (
            <div className="main-container">
                <h1>Mix Notes</h1>
                <NotesList notes={this.state.notes} />
            </div>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));