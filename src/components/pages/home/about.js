import React, { Component } from 'react';
import About from '../../../images/about.png';
import './about.css';


export default class about extends Component {
    render() {
        return (
            <div className='container1'>
                <h1 id='title'>Who We Are</h1>
                <hr></hr>
                <div className='row'>
                    <div className='col-6'>
                    <img alt='' src={About} />

                    </div>
                    <div className='col-6' id='text'>
                        <h1 className='text-center'><span>10 Years</span> Experience</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
