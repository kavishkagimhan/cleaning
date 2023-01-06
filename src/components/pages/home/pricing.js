import React, { Component } from 'react'
import './pricing.css'

export default class
    extends Component {
    render() {
        return (
            <div class="pack container mt-5">
                  <h1 className='title' id='title'>Our Packages</h1>
                    <hr></hr>
                    <div className="row">
                        <div className="col-3" id='col1'>
                            <div className="card" >
                               
                                <div className="card-body">
                                    <h5 className="card-title">Basic</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4 id='price'>$.200 Per Month</h4>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Silver</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4 id='price'>$.500 Per Month</h4>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" > 
                                <div className="card-body">
                                    <h5 className="card-title">Platinum</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4 cl id='price'> $.750 Per Month</h4>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">Gold</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <h4 id='price'>$.1000 Per Month</h4>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>

            </div>
        )
    }
}
