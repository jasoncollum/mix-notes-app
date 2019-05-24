import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import NavBar from './navbar/NavBar';
import ApplicationViews from './ApplicationViews';
// import './index.css';

class App extends Component {
  notesFromAPI = [
    { id: 1, title: "Gorgeous", version: 2, changes: "vocal up 1db", comments: "Singer wants to be louder - I think it's a bad idea, but it's their song." }
  ]

  state = {
    notes: this.notesFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }
}

export default App
