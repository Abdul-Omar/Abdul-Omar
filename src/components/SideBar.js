
import React, { Component } from 'react';
import './SideBar.css';
import Medium from "./Medium.png";
import Github from "./Github.png";
import LinkedIn from "./LinkedIn.png";
import Abdul from "./Abdul.jpg";
import youtube from "./youtube.png";
import background from "./background.png";
import 'tachyons';

const SideBar = () =>{

return (
<article className= "flex">

<article className= " Sidebar flex flex-column mt4 bg-gray">      
<article class="mw5 flex-left bg-white br3 pa3 pa4-ns mv0 ba borderr1 b--black-10  ">
  <div class="tc">
    <img src={Abdul} class="br-100 h4 w-auto dib" title="Photo "/>
    <h1 class=" Name f4">Abdul Omar</h1>

    <a className="link near-black hover-silver dib mh3  pv4 tc" href="https://github.com/Abdul-Omar/ " target="_blank">
    <img src={Github} class="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span className="f6 db">GitHub</span>
  </a>

    <a className="link hover-silver near-black dib mh3  pv4 tc" href="https://linkedin.com/in/abdulkhaliq-omar-5a291b167/" target="_blank">
   <img src={LinkedIn} className="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span className="f6 db">LinkedIn</span>
  </a>

   <a className="link near-black hover-silver dib mh3 pv4 tc" href="https://medium.com"  target="_blank">
    <img src={Medium} class="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span className="f6 db">Medium</span>
  </a>

   <a className="link hover-silver near-black dib mh3  pv4 tc" href="https://linkedin.com/in/abdulkhaliq-omar-5a291b167/" target="_blank">
   <img src={youtube} className="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span className="f6 db">Youtube</span>
  </a>
    
  </div>
</article>
</article>
<article className=" flex-column ph7 center">
<p className="center">
   <div class="tc mt8">
      <h1 class="Name f1 fw6 pt7"> Hi, I am Abdul</h1>
  </div>
</p>
<img className="" src={background} className="img" title="Photo of Abdul Ahmed"/>
</article>

</article>

    );
}

export default SideBar;


