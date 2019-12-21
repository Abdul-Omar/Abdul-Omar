
import React, { Component } from 'react';
import Abdul from "./Abdul.jpg";
import 'tachyons';


const Contact = ()=>{

return(
  
<article class=" Card mw5 center vh-50 bg-white  br5 pa5 pa4-ns mv7 ba mr2 b--black-10 shadow-4">
  <div class="tc">
    <img src={Abdul} class="br-100 h3 w3 dib" title="Photo of Abdul Omar"/>
    <h1 class="f4">Contact Info</h1>
    <hr class="mw3 bb bw1 b--black-10"/>
  </div>
  <p class="lh-copy measure center f5 fw6 black-70">
    Shoot me an email if interested! <br/>
    Details below: <br/>
    Email: amomar@ucsd.edu<br/>
    <br/>
    Thanks for stopping by!
  </p>
</article>
   
    );
}

export default Contact;
