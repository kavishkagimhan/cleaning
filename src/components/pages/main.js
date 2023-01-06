import React, { Component } from 'react'
import Home from './home/home';
import About from './home/about';
import Services from './home/services';
import Pricing from './home/pricing';
import Contact from './contact/contact';


export default class main extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Services/>
        <Contact/>
        <Pricing/>
      </div>
    )
  }
}
