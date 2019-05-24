import React, { Component } from 'react';

class NoteForm extends Component {
    // Set initial state
    state = {
        songTitle: '',
        versionNumber: '',
        clientRequests: '',
        mixChanges: '',
        engineerComments: ''
    }

    // Update state whenever an input field is edited
    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange);
    }

    // Local method for validation, creating new mix note object, and invoking the function reference passed from parent component
    constructNewMixNote = e => {
        e.preventDefault();
        const note = {
            songTitle: this.state.songTitle,
            versionNumber: this.state.versionNumber,
            clientRequests: this.state.clientRequests,
            mixChanges: this.state.mixChanges,
            engineerComments: this.state.engineerComments
        };

        //  Save note to DB and redirect user to mix notes list

    }

    render() {
        return (
            <React.Fragment>
                <form className="notes-form">
                    {/* Song Title */}
                    <div className="form-group">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="songTitle"
                            placeholder="Song Title..."
                        />
                    </div>
                    {/* Version Number */}
                    <div className="form-group">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="versionNumber"
                            placeholder="Version Number..."
                        />
                    </div>
                    {/* Client Requests */}
                    <div className="form-group">
                        <textarea
                            type="text"
                            rows="3"
                            cols="33"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="clientRequests"
                            placeholder="Client Requests...">
                        </textarea>
                    </div>
                    {/* Mix Changes */}
                    <div>
                        <textarea
                            type="text"
                            rows="3"
                            cols="33"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="mixChanges"
                            placeholder="Document Changes Here...">
                        </textarea>
                    </div>
                    {/* Engineer Comments */}
                    <div>
                        <textarea
                            type="text"
                            rows="3"
                            cols="33"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="engineerComments"
                            placeholder="Engineer Comments...">
                        </textarea>
                    </div>
                    <buton
                        type="button"
                        onClick={this.constructNewMixNote}
                        className="btn btn-primary"
                    >Save Mix Notes</buton>
                </form>
            </React.Fragment>
        )
    }
}

export default NoteForm