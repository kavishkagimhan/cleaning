import React, { Component } from 'react';
import './signup.css';
import Image from '../../../images/new-3.png';

export default class signup extends Component {
  render() {
    return (
        <div className='con2 container'>
        <h1 id='title'>SignUp</h1>
       <hr></hr>
       <div className='row' >
           <div className='col-6'>
           <div class="center">
           <h1>Signup</h1>
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
               <div class="txt_field">
                   <input type="password" required />
                   <span></span>
                   <label>Email</label>
               </div>
               <div class="txt_field">
                   <input type="password" required />
                   <span></span>
                   <label>Full Name</label>
               </div>
               <div class="txt_field">
                   <input type="password" required />
                   <span></span>
                   <label>Phone</label>
               </div>
              
               <input type="submit" value="Signup" />
               
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
