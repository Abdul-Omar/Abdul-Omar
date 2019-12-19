
import React, { Component } from 'react';
import 'tachyons';
import './SideBar.css';

const Navbar = ({onRouteChange}) =>{

return (
   <header className="flex navbarr bg-black-90 dib flex w-100 top-bar fixed mt0 pa3">    
  <nav className="dark-gray f6 fw6 ttu tracked ">
    <a  onClick={() => onRouteChange('home')} className="link dim white dib mr3" href="#" title="Home">Home</a>
    <a onClick={() => onRouteChange('projects')}  className="link dim white dib mr3" href="#" title="About">Projects</a>  
     <a onClick={() => onRouteChange('data')} className=" link  dim white dib" href="#" title="Data Structures">Data Structures</a>
    </nav>
  </header>
    );
}

export default Navbar;