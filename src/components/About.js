import React, { Component } from 'react';
import 'tachyons';
import './Cover.css';
import background from "./background.png";
import Abdul from "./Abdul.jpg";
import smiley from "./smiley.png";
const About = () =>{

return (

	<article className= "flex center  mt7 ">


  <article class=" Card mw5 center vh-50 bg-white  br3 pa3 pa4-ns mv3 ba mr2 b--black-10 shadow-4">
  <div class="tc">
    <img src={Abdul} class="br-100 h3 w3 dib" title="Photo of Abdul"/>
    <h1 class="f4">Education</h1>
    <hr class="mw3 bb bw1 b--black-10"/>
  </div>
  <p class="lh-copy measure center f6 black-70">
    B.S Computer Science <br/>
    University of California San Diego<br/>
    Expected: <br/>
          Spring, 2021
  </p>
</article>

<article class=" Card mw5 center vh-50 bg-white br3 pa3 pa4-ns mv3 ba mr2 b--black-10 shadow-4">
  <div class="tc">
    <img src={Abdul}  class="br-100 h3 w3 dib" title="Photo of Abdul"/>
    <h1 class="f4">Skills</h1>
    <hr class="mw3 bb bw1 b--black-10"/>
  </div>
  <p class="lh-copy measure center f6 black-70">
    I am passionate about software development 
    and teaching CS ( go CS FOR ALL! <img src={smiley}  class="br-100 h1 w1 dib" title="Photo of Abdul"/>)
    I am proficient in the following languages and 
    frameworks:
    <ul>
     <li> C++ </li>
     <li> Java </li>
     <li> C </li>
     <li> react </li>
     <li>Postgresql</li>
     </ul>

  </p>
</article>

<article class=" Card mw5 center bg-white vh-50 br3 pa3 pa4-ns mv3 ba mr2 b--black-10 shadow-4">
  <div class="tc">
    <img src={Abdul}  class="br-100 h3 w3 dib" title="Photo of Abdul"/>
    <h1 class="f4">Interests</h1>
    <hr class="mw3 bb bw1 b--black-10"/>
  </div>
  <p class="lh-copy measure center f6 black-70">
    My interests include teaching CS to K-12 students
    to help sow the seed of creativity and innovation 
    and to help bring equity and equality to CS education
    especially at the K-12 level. 
  </p>
</article>

</article>
    );
}

export default About;