import React from "react";

import CourseData from "./CourseData";
import Blog1 from "../images/A2.jpeg";
import Blog2 from "../images/A3.jpeg";
import Blog3 from "../images/A4.jpeg";

const LeadersPage = () => {
  return (
    
    <div className="course TeachersPage">
      <h1>Use the Calendar to find out when waste is collected at your doorstep !</h1>
      <p>Don’t wait — Sign up to recycle!</p>
      <p>Explore Our Solutions!</p>
      

      <div className="coursecard">
        <CourseData
          image={Blog1}
          heading="SUNDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam."
          //price="Price: $40"
        />

        <CourseData
          image={Blog2}
          heading="MONDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam."
          //price="Price: $40"
          //signUp="Needs SignUp button linked to sign up page"
        />

        <CourseData
          image={Blog3}
          
          heading="TUESDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam." />
          
        
        <CourseData
          image={Blog3}
          
          heading="WEDNESDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam." />


    <CourseData
          image={Blog3}
          
          heading="THURSDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam." />
  <CourseData
          image={Blog3}
          
          heading="FRIDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam." />
          <CourseData
          image={Blog3}
          
          heading="SATURDAY"
          sub_heading="TIME: "
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Lorem ipsum dolor sit amet. In odit voluptatem et quas iste ut veritatis quia est corporis libero id quidem enim ut corrupti velit. 
          Sed nemo veniam ab molestiae illo ab facere porro est nisi quia cum sint dolores sed incidunt veniam." />




      </div>

      {/* <div className="coursecard">
        <CourseData
          image={Blog1}
          heading="Kid's Classes"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="If your child is looking to improve their already-impressive skills? Whatever their age or skill level, our PODLINGS (6-11) & PODSTERS (10-14) programs are a great ways for kids to practice Table Tennis"
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
        <CourseData
          image={Blog2}
          heading="Casual Open play"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="Join us for a fun Open Play dedicated to Casual Players!  Matches will start on a first-come-first-serve (no pun) basis for each table and then rotate singles and doubles matches (if desired) around the Pod. There will be plenty of playing time for everybody and players of similar levels are matched up!"
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
        <CourseData
          image={Blog3}
          heading="Intermediate Clinic"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="This Intermediate Clinic will focus on building your fundamental strokes to help you be more consistent.
        Our PingPod Coach and US National Team player Adar Alguetti will be running this Intermediate Clinic"
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
      </div> */}
    </div>
  );
}

export default LeadersPage;