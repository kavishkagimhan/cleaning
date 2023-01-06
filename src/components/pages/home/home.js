import React, { Component } from 'react';
import './home.css';
import Hero from '../../../images/hero.png';



export default class home extends Component {
  render() {
    return (
      <div>
        <section className='hero '>
          <div className='row'>
            <div className='col1 col'>
              <h6>CLEAN MASTER</h6>
              <h1>Best & Trusted
                Cleaning Service</h1>
              <p>It is a long established fact that a
                reader will be distracted by the readable
                content of a page when looking at its
                layout. The point of using Lorem Ipsum
              </p>
              <button type="button" className="btn " id='btn2'>Get a Servics</button>
              <button type="button" className="btn" id='btn2'>Start</button>
            </div>
            <div className="image col">
              <img src={Hero} alt="" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
