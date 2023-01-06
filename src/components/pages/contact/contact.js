import React, { Component } from 'react';
import './contact.css'
import Contact from '../../../images/Cleaning-1.png';

export default class contact extends Component {
    render() {
        return (
            <div class="container">
                <h1 id='title'>Contact US</h1>
                <hr></hr>
                <div className='row2 row'>
                    <div className='col-6'>
                        <img src={Contact} alt='About Us' />
                    </div>
                    <div className='col-6'>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Phome Number</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Question</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                           
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
