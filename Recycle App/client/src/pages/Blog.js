import "./BlogStyle.css";
import BlogData from "./BlogData";
import Blog1 from "../images/B1.jpg";
import Blog2 from "../images/B2.jpg";
import Blog3 from "../images/B3.jpg";

function Blog() {
  return (
    <div className="blog">
      <h1>The Latest</h1>
      <p>All the Latest Videos, World Tours, Articles, Discussion's, reviews and more!</p>
      
      <div className ="blogcard">
        < BlogData 
        image={Blog1}
        
        heading = "The Screen Time Problem"
        text = "Ben Borton writes about how Table Tennis uses the 
        same tech responsible for the screen time problem – 
        the smart phone – to get people back to a healthy, 
        active, social IRL experience."
        />

        < BlogData 
        image={Blog2}
        heading = "Magic of Autonomous Experiences"
        text = "Ben Borton writes about how Table Tennis uses the 
        same tech responsible for the screen time problem – 
        the smart phone – to get people back to a healthy, 
        active, social IRL experience."
        />

        <BlogData 
        image={Blog3}
        heading = "Why I’m Joining Table Tennis"
        text = "Ben Borton writes about how Table Tennis uses the 
        same tech responsible for the screen time problem – 
        the smart phone – to get people back to a healthy, 
        active, social IRL experience."
        />

      </div>

    </div>
  );
}

export default Blog;