import React, { Component } from 'react';
import './footer.css'

export default class footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Tile Clean</a></li>
                            <li><a href="#">Floor Clean</a></li>
                            <li><a href="#">Carpet Clean</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About US</a></li>
                            <li><a href="#">Contact US</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Admin Login</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a>
                        <p className="copyright">Company Name © 2018</p>
                    </div>
                </div>
            </div>
        </footer>
        </div>
      </div>
    )
  }
}
