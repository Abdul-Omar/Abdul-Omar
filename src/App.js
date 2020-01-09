import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Cover from './components/Cover';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Teaching from './components/Teaching';
import 'tachyons';



const initialState = {
  
  route: 'home'
}



class App extends Component {

  constructor(){

    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState(initialState)
    } else if (route === 'projects') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
     const {route} = this.state;
    return (
      <div> 
        <Navbar onRouteChange={this.onRouteChange}/>
        { route === 'home'
        ? <div className="flex">
        <SideBar className="h-auto"/> 
        <Cover/>
        </div>
         :
         ( route === 'projects'

         ?<div className="flex" >
         <SideBar/>
         <Projects  onRouteChange={this.onRouteChange}> </Projects>
         </div>

         :
         (

         route === 'about'

         ?<div className= "flex">
         <SideBar/>
         <About/>
         </div>
         :
         ( route === 'contact'
         ?
          <div className="flex "> 

           <SideBar/>
          <Contact/> 
          </div>
          :

          <div className=" flex-column"> 
           < Teaching className="topp" />
           </div>
           )
           )
         )
       }
      </div>
    );
  }
}

export default App;
