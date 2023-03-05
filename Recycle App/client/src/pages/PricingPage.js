import React from 'react';
import videoBg from '../Assets/video.mp4';
import './MissionStyle.css'
import Course from './Course';

function PricingPage(props) {
    return (
        <>
            
      <div id='PricingpageDiv1'>
      <video width="100%" height="500" controls >
      <source src={videoBg} autoplay loop type="video/mp4"/>
     </video>
      </div>

      <div id='PricingpageDiv2'>
          <div id="textOnImg">Class Information</div>                
      </div>
      <div className="Mission">
      <h1>Sign Up For Classes in 2023</h1>
            <p>Ready to introduce yourself to the wonderful world of table tennis? 
                Or maybe you/your child is looking to improve their already-impressive skills? 
                Whatever the age or skill level, our
                programs are a great ways for everyone to practice Table tennis, get moving, meet new friends, 
                and have some fun!</p> 
                <p>Every class is taught by one of our amazing coaches who will get to know you/your child and help them level up.
                     Our PRACTICE Program focuses on honing in on your Table Tennis ability through more personal coaching 
                     that will help him/her improve their skill.Classes start at $520 for 13 weeks. Price varies by location and time, see sign up page for more details.
                </p>
                
                
        </div>
        <Course/>

      
        </>
    );
}
  
export default PricingPage;


