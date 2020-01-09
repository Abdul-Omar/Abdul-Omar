import React, { Component } from 'react';
import 'tachyons';
import './Cover.css';
import background from "./background.png";
import Abdul from "./Abdul.jpg";
import smiley from "./smiley.png";
const Projects = () =>{

return (

	<article className= "flex center  mt7  ">


      <article class=" Card mw5 center vh-75 bg-white  w-75br3 pa3 pa4-ns mv3 ba mr2 b--black-10 shadow-5">
         <div class="tc">
            <img src={Abdul} class="br-100 h3 w3 dib" title="Photo of Abdul"/>
            <h1 class="f4"> Image Recogntion Web App</h1>
            <hr class="mw3 bb bw1 b--black-10 light-green"/>
         </div>
         <p class="lh-copy measure center f6 black-70">
           <a className=" underline center link fw6 blue near-black hover-silver dib mh3  pv4 tc" href="https://facedetec.herokuapp.com " target="_blank">facedetec.herokuapp.com
           </a> 
            <ul>
               <li> Built a facial recognition web app using react, node.js ,
                   postgresql and Clarifai api </li>
               <li> The app finds and calculates the facial bounding box with
                  over 99.9 percent accuracy. </li>
            </ul>
         </p>
   
     </article>

       <article class=" Card mw5 center vh-75 bg-white br3 pa3 pa4-ns mv3 w-75 ba mr2 b--black-10 shadow-5">
        <div class="tc">
           <img src={Abdul}  class="br-100 h3 w3 dib" title="Photo of Abdul"/>
           <h1 class="f4">Six-Degrees-of-Kevin-Bacon(SDKB)</h1>
           <hr class="mw3 bb bw1 b--black-10 light-green"/>
        </div>
        <p class="lh-copy measure center tc f6 black-70 pt2">
            
                Implemented SDKB on  0.5 million IMDB movie data points 
                using efficient data structures and search algorithms including A*, Kruskal’s algorithms (c++).
       </p>
    </article>

    <article class=" Card mw5 center vh-75 bg-white br3 pa3 pa4-ns mv3 w-75 ba mr2 b--black-10 shadow-5">
        <div class="tc">
           <img src={Abdul}  class="br-100 h3 w3 dib" title="Photo of Abdul"/>
           <h1 class="f4">myls</h1>
           <hr class="mw3 bb bw1 b--black-10 light-green"/>
        </div>
        <p class="lh-copy measure center f6 black-70">
           <ul> 
               <li> Implemented the 'ls' functionality on Linux Systems
                    using C and ARM Assembly.
               </li>
               <li>Implementation comes with various native options such as
                      -f, -l, -a etc
               </li>

               <li> Checkout the project on my Github link on the left! </li>

          </ul>
       </p>
    </article>


  </article>
    );
}

export default Projects;