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
          text = ""
          />
  
          < BlogData 
          image={Blog2}
          heading = ""
          />
  
          <BlogData 
          image={Blog3}
          heading = ""
          />
  
        </div>
  
      </div>
    );
  }
  
  export default Blog;