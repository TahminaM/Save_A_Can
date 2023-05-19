import React from "react";

import CourseData from "./CourseData";
import Blog1 from "../images/B1.jpeg";
import Blog2 from "../images/B2.jpeg";
import Blog3 from "../images/B3.jpeg";

const TeachersPage = () => {
  return (

    <div className="course TeachersPage">
      <h1>Need help with sorting? Let our sorting guide assist you ! </h1>
      
      <p>Recycling is an important activity that everyone can participate in to help reduce waste and protect the environment. One of the most important steps in the recycling process is sorting materials correctly. By following simple guidelines, you can help ensure that your recyclable materials are sorted correctly and can be effectively recycled.
      </p>
        <p>Don’t wait — Sign up to recycle!</p>
        <p>Explore Our Solutions!</p>
      <div className="coursecard">
        <CourseData
          image={Blog1}
          heading="Paper and Cardboard"
          text="Paper and cardboard are some of the most commonly recycled materials. Sort them separately from other materials, and make sure they are clean and dry. Examples of recyclable paper include newspapers, magazines, office paper, envelopes, and cardboard boxes."
        />

        <CourseData
          image={Blog2}
          heading="Plastics"
          text="Plastics are a bit trickier to sort because they come in so many different types. Generally, plastic items with the recycling symbol on them can be recycled. Check with your local recycling program to see which types of plastics they accept. Make sure to remove any caps or lids before recycling plastic containers."
          signUp="Share with your school leader"
        />

        <CourseData
          image={Blog3}

          heading="Glass"
  
          text="Glass is a great material to recycle because it can be recycled infinitely without losing quality. Sort glass bottles and jars separately from other materials, and make sure they are clean and dry. Be careful not to break glass when putting it in the recycling bin, as broken glass can be a hazard for waste workers."
        
          signUp="Needs SignUp button linked to sign up page"
        />
      </div>

      {/* <div className="coursecard">
        <CourseData
          image={Blog1}
          heading="Kid's Classes"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text=""
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
        <CourseData
          image={Blog2}
          heading="Casual Open play"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text="" price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
        <CourseData
          image={Blog3}
          heading="Intermediate Clinic"
          sub_heading="Spring Season: 20-23 weeks/classes"
          sb_heading="Location: 97 Broadway, Brooklyn, NY "
          text=""
          price="Price: $40"
          signUp="Needs SignUp button linked to sign up page"
        />
      </div> */}
    </div>
  );
}

export default TeachersPage;