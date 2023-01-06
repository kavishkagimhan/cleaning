import React, { Component } from 'react'
import './services.css';
import Service1 from '../../../images/service-1.jpg';
import Service2 from '../../../images/service-2.jpg';
import Service3 from '../../../images/service-3.jpg';
import Service4 from '../../../images/service-4.jpg';


export default class services extends Component {
    render() {
        return (
            <div className='service1'>
                <div className='con container '>
                    <h1 className='title' id='title'>Our Services</h1>
                    <hr></hr>
                    <div className="row">
                        <div className="col-3" id='col1'>
                            <div className="card" >
                                <img src={Service1} className="card-img-top" id='img' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Flour Cleaning</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <img src={Service2} className="card-img-top" id='img' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Glass Cleaning</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <img src={Service3} className="card-img-top" id='img' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Carpet Cleaning</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card" >
                                <img src={Service4} className="card-img-top" id='img' alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Toilet Cleaning</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
