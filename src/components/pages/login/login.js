import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css'
import Image from '../../../images/new-3.png';


export default class login extends Component {
    render() {
        return (
            <div className='con container'>
                 <h1 id='title'>Login</h1>
                <hr></hr>
                <div className='row' >
                    <div className='col-6'>
                    <div class="center">
                    <h1>Login</h1>
                    <form method="post">
                        <div class="txt_field">
                            <input type="text" required />
                            <span></span>
                            <label>Username</label>
                        </div>
                        <div class="txt_field">
                            <input type="password" required />
                            <span></span>
                            <label>Password</label>
                        </div>
                        <div class="pass">Forgot Password?</div>
                        <a href='/'><input type="submit" value="Login" /></a>
                        <div class="signup_link">
                            Not a member?<a><Link className="nav-link" to="/signup">Signup</Link></a>
                        </div>
                    </form>
                </div>
                    </div>
                    <div className='col-6'>
                  <img id='img' src={Image} />

                  </div>
                </div>
               
            </div>
        )
    }
}
