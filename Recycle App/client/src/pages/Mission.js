import Mission1 from '../images/m1.jpg';
import Mission2 from '../images/m2.jpg';
import Mission3 from '../images/m3.jpg';
import Mission4 from '../images/m4.jpg';
import MissionData from './MissionData';
import './MissionStyle.css'

const Mission =() =>{
    return(
        <div className="Mission">
            <h1>Spin and Learn Mission</h1>
            <p>We aim to make Table Tennis accessible to everyone. Starting in NYC, we offer communities safe spaces to play that urban centers desperately lack.
          Our mission is to activate neighborhoods by using technology and an easy, seamless and affordable customer experience. In doing so, the Spin and Learn-network aims 
          to elevate the sport of Table Tennis, which has been historically overlooked in the United States.
          From beginners to experts, the SPIN AND LEARN-network is designed to take people on the journey from 
          Ping Pong to Table Tennis, helping them stay active by promoting a healthy and fun experience next door!</p>




          <MissionData
          className="first-des"
          heading="Our Goal"
          text="We aim to make Table Tennis accessible to everyone. Starting in NYC, we offer communities safe spaces to play that urban centers desperately lack. Our mission is to activate neighborhoods by using technology and an easy, seamless and affordable customer experience. In doing so, the Spin and Learn-network aims to elevate the sport of Table Tennis, which has been historically overlooked in the United States. From beginners to experts, the SPIN AND LEARN-network is designed to take people on the journey from Ping Pong to Table Tennis, helping them stay active by promoting a healthy and fun experience next door!"
          img1= {Mission1}
          img2= {Mission2}
        />


       <MissionData
          className="first-des-reverse"
          heading="Social & Sustainability"
          text="We aim to make Table Tennis accessible to everyone. Starting in NYC, we offer communities safe spaces to play that urban centers desperately lack. Our mission is to activate neighborhoods by using technology and an easy, seamless and affordable customer experience. In doing so, the Spin and Learn-network aims to elevate the sport of Table Tennis, which has been historically overlooked in the United States. From beginners to experts, the SPIN AND LEARN-network is designed to take people on the journey from Ping Pong to Table Tennis, helping them stay active by promoting a healthy and fun experience next door!"
         
        img1= {Mission3}
        img2= {Mission4}
        />




        </div>


    );
};


export default Mission