
import React, { Component } from 'react';
import 'tachyons';
import './SideBar.css';

const Navbar = ({onRouteChange}) =>{

return (
   <header className="flex navbarr bg-black-90 w-100 top-bar fixed mt0 pa3">    
  <nav className="dark-gray f6 fw6 ttu tracked ">
    <a  onClick={() => onRouteChange('home')} className="link dim white dib mr3" href="#" title="Home">Home</a>
    <a onClick={() => onRouteChange('projects')}  className="link dim white dib mr3" href="#" title="About">Projects</a>  
     <a onClick={() => onRouteChange('data')} className=" link  dim white dib pr7 mr4" href="#" title="Data Structures">Data Structures</a>
     <a onClick={() => onRouteChange('data')} className=" link  dim white dib ml7 ph7 mr0 flex-end" href="#" title="contact">contact</a>
    </nav>
  </header>
    );
}

export default Navbar;