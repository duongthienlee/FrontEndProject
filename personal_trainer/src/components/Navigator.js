import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigator extends Component {


    render() {
        return (
            <div>
                <nav className="navbar  navbar-expand-lg navbar-dark bg-dark fixed-top " data-nav-status="toggle">
                    <button className="navbar-toggler navbar-toggler-right" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent"
                            ariacontrols="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">My React Page</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Frontpage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/calendar">Calendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/customers">Customer</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}


export default Navigator;