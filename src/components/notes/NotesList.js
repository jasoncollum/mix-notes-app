import React, { Component } from 'react';


class NotesList extends Component {
    render() {
        return (
            <div>
                <h3>Click On A Mix Version To View Notes</h3>
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