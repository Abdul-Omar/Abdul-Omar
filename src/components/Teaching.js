
import React, { Component } from 'react';
import queue from "./queue.png";
import Graph from "./Graph.png";
import stack from "./stack.png";
import BST from "./BST.png";
import KDT from "./KDT.png";
import youtube from "./youtube.png";
const Teaching = () =>{

  return (

<article className="flex pt4">
     
<article class="mw5 flex-left bg-white br3 pa3 pa4-ns mv0 ba borderr1 b--black-10 mt4 pt4  ">
  <div class="tc">
   <a className="link near-black hover-silver dib mh3  pv5 tc" target="_blank">
    <img src={queue} class="br-100 h3 w3 dib" title="queue "/>
    <span className="f4 ">Queue</span>
  </a>

    <a className="link near-black hover-silver dib mh3  pv5 tc"  target="_blank">
    <img src={stack} class="br-100 h3 w3 dib" title="stack "/>
    <span className="f4 ">Stack</span>
  </a>

    <a className="link hover-silver near-black dib mh3  pv5 tc" target="_blank">
   <img src={BST} className="br-100 h3 w3 dib" title="Binary Search Tree "/>
    <span className="f4 fw4">BST</span>
  </a>

   <a className="link near-black hover-silver dib mh3 pv5 tc"   target="_blank">
    <img src={KDT} class="br-100 h3 w3 dib" title="KD-Tree "/>
    <span className="f4 db">KD-Tree</span>
  </a>

   <a className="link near-black hover-silver dib mh3 pv5 tc"  target="_blank">
    <img src={Graph} class="br-100 h3 w3 dib" title="graphs "/>
    <span className="f4 db">Graphs</span>
  </a>


   <a className="link hover-silver near-black dib mh3  pv5 tc  " target="_blank">
   <img src={youtube} className="br-100 h3 w3 dib" title="Youtube"/>
    <span className="f6 db">Youtube</span>
  </a>

   
  </div>
</article>

<article class="cf pa3 mw9 center">
  <header class="fl w-100 w-50-l pa3-m pa4-l mb3 mb5-l">
    <h2 className="fw6 light-green tc"> coming soon! </h2>
    <h2 class="lh-title f3 b mt0">
      Understanding the mechanics of advanced data structures and algorithms is 
      an important skill to have as a software engineer. In this field, you are always 
      surrounded by data and are always tasked with storing and organizing data.
      
    </h2>
  </header>
  <section class="fl w-100">
    <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l tc">
      <p class="f4 lh-copy measure tc">
        I have prepared this course with goal of teaching data structures 
        in the least confusing manner taking into account various level of 
        skill
        and exposure to data structures and algorithms. This course will be 
        in c++ and Java.
        Hence, familiarity with the basic syntax is assumed, if not expected.

      </p>
    </div>
    <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l">
      <p class="f4 lh-copy measure">

        We will start with basic data structues such as arrays, vectors, arraylists
        stack and queue. Then, later on we will move on to advanced data structures
        and algorithms. These advanced data structures include Binary Trees, KD-Trees,
        Multi-Way Tries, Ternary Search Tries. We will also study graphs and advanced
        graph algorithms including Dijkstras shortest path algorithm, Kruskals algorithm
        that finds Minimum Spanning Trees(MSTs). To cap it all, we will look at the A* algorithm
        also used in findind the shortest path from one point to another on a graph that
        uses a heuristic function to smartly find the shortest path.
         
      </p>
    </div>
    <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l">
      <p class="f4 lh-copy measure">
        In addition to written material, I will also post video tutorials on Youtube. 
        click the link to my Youtube channel to help with the the understanding of the content
        The number of videos posted will be proportional to the interest shown by the 
        followers of the course and questions asked there. 
      </p>
    </div>
    <div class="fl w-100 w-50-m w-25-l pa3-m pa4-l">
      <p class="f4 lh-copy measure">
       Stay tuned for more announcements. Meanwhile, browse through the 
       written tutorials I have prepared for you. Thanks for stopping by! Enjoy!
      </p>
    </div>
    </section>
</article>
</article>
);

}

export default Teaching;