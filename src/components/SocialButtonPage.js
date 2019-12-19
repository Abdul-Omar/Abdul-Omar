import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

import Medium from "./Medium.png";
import Github from "./Github.png";
import LinkedIn from "./LinkedIn.png";
import './SideBar.css';


const SocialButtonsPage = () => {
  return (

    

<footer class="pv4 ph3 ph5-ns  tc footer">
  <a class="link near-black hover-silver dib mh3 tc" href="https://github.com/Abdul-Omar/ " target="_blank">
    <img src={Github} class="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span class="f6 db">GitHub</span>
  </a>
 
  <a class="link hover-silver near-black dib mh3 tc " href="https://medium.com" target="_blank">
            <img src={Medium} class="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span class="f6 db">Medium</span>
  </a>
  <a class="link hover-silver near-black dib mh3 tc" href="https://linkedin.com/in/abdulkhaliq-omar-5a291b167/" target="_blank">
   <img src={LinkedIn} class="br-100 h3 w3 dib" title="Photo of Abdul Ahmed"/>
    <span class="f6 db">LinkedIn</span>
  </a>
   
</footer>
  );
}

export default SocialButtonsPage;