import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import  SocialButtonPage from './components/SocialButtonPage';
import SideBar from './components/SideBar';
import Cover from './components/Cover';
import Projects from './components/Projects';
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
         <SocialButtonPage/>
        { route === 'home'
        ? <div className="flex">
        <SideBar/> 
        </div>
         :
         <Projects  onRouteChange={this.onRouteChange}> </Projects>
       }
      </div>
    );
  }
}

export default App;
