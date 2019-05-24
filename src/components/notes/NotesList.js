import React, { Component } from 'react';
import NoteForm from './NoteForm';


class NotesList extends Component {
    render() {
        return (
            <div>
                <h4>Click On A Mix Version To View Notes</h4>
                <hr />
                {
                    this.props.notes.map(note =>
                        <div className="note-link" key={note.id}>
                            {note.title} MIX V{note.version}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default NotesList