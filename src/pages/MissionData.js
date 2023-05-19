import { Component } from "react";
import "./MissionStyle.css";
////import Mission1 from '../images/m1.jpg';
//import Mission2 from '../images/m2.jpg';
//import Mission3 from '../images/m3.jpg';
//import Mission4 from '../images/m4.jpg';

class MissionData extends Component {
  render() {
    return (


        <div className={this.props.className}>
        <div className="des-text">
        <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>

      </div>
      <div className="image">
          <img alt = "img" src={this.props.img1}/>
          <img alt = "img" src={this.props.img2}/>
      </div>
  </div>


    );
  }
}

export default MissionData;