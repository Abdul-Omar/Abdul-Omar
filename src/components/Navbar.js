
import React, { Component } from 'react';
import 'tachyons';
import './SideBar.css';

const Navbar = ({onRouteChange}) =>{

return (
     <nav className="bg-black-90 w-100 top-bar fixed mt0 pa3">    
         <ul className="main-nav dark-gray f6 fw6 ttu tracked ">
            <li> <a  onClick={() => onRouteChange('home')} className=" link dim white  dib mr3" href="#" title="Home">Home</a> </li>
            <li> <a onClick={() => onRouteChange('about')}  className=" link dim white dib mr3" href="#" title="About">About</a> </li> 
            <li> <a onClick={() => onRouteChange('projects')} className="  link  dim white  dib pr3 " href="#" title="About">Projects</a></li> 
            <li> <a onClick={() => onRouteChange('teaching')} className="  link  dim white pr3 dib" href="#" title="About">Teaching</a></li> 
            <li className="Push"><a onClick={() => onRouteChange('contact')} className="link Push dim  white" href="#" title="contact">contact</a></li> 
        </ul>
     </nav>
  );
}

export default Navbar;