import React from 'react';
import Mission from '../pages/Mission';
import Blog from '../pages/Blog';
import img2 from '../images/About1.jpg';

function AboutUsPage(props) {
  return (
    <>
    
      <div id='aboutpageDiv1'>
          <img src={img2} alt="table tennis table" id="theaboutpageImg"></img>
      </div>
      <div id='aboutpageDiv2'>
          <div id="textOnImg">Our Story!</div>                
      </div>


      <Mission/>
      <Blog/>

      
    </>
  );
}

export default AboutUsPage;
