import React, { Component } from 'react';
import 'tachyons';
import './Cover.css';
import background from "./background.png";
import smiley from "./smiley.png";

const Cover = () =>{

return (

	 <article className= "flex-column ">

       <article className=" flex-column ph7 center">
          <p className="center">
              <div class="tc mt8">
                 <h1 class="Name f1 fw6 pt7"> Hi, I am Abdul</h1>
              </div>
          </p>
          <img className="" src={background} className="img" title="Photo of Abdul Ahmed"/>
        </article>
        
        <p className="tc f3 fw6 gold"> Browse around using the navigation links at the top to know more! </p>

    </article>
   );
}

export default Cover;