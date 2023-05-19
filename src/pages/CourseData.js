import "./courseStyle.css";

function CourseData(props) {
  return (
    <div className="t-card CourseData">
        <div className="t-image">
            <img src={props.image} alt="images"/>
        </div>
        <h4>{props.heading}</h4>
        <h5>{props.sub_heading}</h5>
        <h5>{props.sb_heading}</h5>
        <p>{props.text}</p>
        <h4>{props.price}</h4>
        {/* <h4>{props.signUp}</h4> */}
    </div>
  );
}

export default CourseData;