import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default class
    extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className='navbar-brand'>CleanME</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contact">Contact</Link>
                           </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/conditions">Terms and conditions</Link>
                            </li>
                           
                        </ul>
                        <Link className="nav-link" to="/login">Login</Link>
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button> */}
                    </div>
                </nav>
            </div>
        )
    }
}
