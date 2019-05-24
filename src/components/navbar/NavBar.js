import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <h1>Mix Version Notes</h1>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link">Mix Notes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link">New Mix Note</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar