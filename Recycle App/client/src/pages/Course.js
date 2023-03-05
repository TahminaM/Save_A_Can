import "./courseStyle.css";
import CourseData from "./CourseData";
import Blog1 from "../images/B1.jpg";
import Blog2 from "../images/B2.jpg";
import Blog3 from "../images/B3.jpg";

function course() {
  return (
    <div className="course">
      <h1>Choose your Plan </h1>
      <p>Start a free 14 day trial, or get started with our free plan!</p>
      <p>Don’t wait — spots are filling up!</p>
      


      <div className ="coursecard">

        <  CourseData
        image={Blog1}
        heading = "Kid's Classes"
        sub_heading = "Spring Season: 20-23 weeks/classes"
        sb_heading = "Location: 97 Broadway, Brooklyn, NY "
        text = "Description: If your child is looking to improve their already-impressive skills? Whatever their age or skill level, our PODLINGS (6-11) & PODSTERS (10-14) programs are a great ways for kids to practice Table Tennis"
        price= "Price: $40"
       
        />

        < CourseData
        image={Blog2}
        heading = "Casual Open play"
        sub_heading = "Spring Season: 20-23 weeks/classes"
        sb_heading = "Location: 97 Broadway, Brooklyn, NY "
        text = "Join us for a fun Open Play dedicated to Casual Players!  Matches will start on a first-come-first-serve (no pun) basis for each table and then rotate singles and doubles matches (if desired) around the Pod. There will be plenty of playing time for everybody and players of similar levels are matched up!"
        price= "Price: $40"
        signUp = "Needs SignUp button linked to sign up page"
        />

        < CourseData
        image={Blog3}
        heading = "Intermediate Clinic"
        sub_heading = "Spring Season: 20-23 weeks/classes"
        sb_heading = "Location: 97 Broadway, Brooklyn, NY "
        text = "This Intermediate Clinic will focus on building your fundamental strokes to help you be more consistent.
        Our PingPod Coach and US National Team player Adar Alguetti will be running this Intermediate Clinic"
        price= "Price: $40"
        signUp = "Needs SignUp button linked to sign up page"

        />
        

      </div>

      <div className ="coursecard">

        <  CourseData
        image={Blog1}
        heading = "Kid's Classes"
        sub_heading = "Spring Season: 20-23 weeks/classes"
        sb_heading = "Location: 97 Broadway, Brooklyn, NY "
        text = "If your child is looking to improve their already-impressive skills? Whatever their age or skill level, our PODLINGS (6-11) & PODSTERS (10-14) programs are a great ways for kids to practice Table Tennis"
        price= "Price: $40"
        signUp = "Needs SignUp button linked to sign up page"
        />

        < CourseData
        image={Blog2}
        heading = "Casual Open play"
        sub_heading = "Spring Season: 20-23 weeks/classes"
        sb_heading = "Location: 97 Broadway, Brooklyn, NY "
        text = "Join us for a fun Open Play dedicated to Casual Players!  Matches will start on a first-come-first-serve (no pun) basis for each table and then rotate singles and doubles matches (if desired) around the Pod. There will be plenty of playing time for everybody and players of similar levels are matched up!"
        price= "Price: $40"
        signUp = "Needs SignUp button linked to sign up page"
        />

        < CourseData
        image={Blog3}
        heading = "Intermediate Clinic"
        sub_heading = "Spring Season: 20-23 weeks/classes"
        sb_heading = "Location: 97 Broadway, Brooklyn, NY "
        text = "This Intermediate Clinic will focus on building your fundamental strokes to help you be more consistent.
        Our PingPod Coach and US National Team player Adar Alguetti will be running this Intermediate Clinic"
        price= "Price: $40"
        signUp = "Needs SignUp button linked to sign up page"
        />
        

      </div>


    </div>
  );
}

export default course;