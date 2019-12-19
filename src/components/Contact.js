
import React, { Component } from 'react';

import 'tachyons';


const Contact = ()=>{

return(
  
div class="container">
  <form action="/action_page.php">
    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">


    <label for="message">Message</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">
  </form>
</div>
   
    );
}

export default Contact;
