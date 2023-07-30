import shed from "../../assets/img-banner-shed.jpg";
import welder from "../../assets/img-banner-welder.jpg";

import mainLogo from "../../assets/img-logo-gunabros-large.png";
import { Link } from "react-router-dom";

const arr = [
  {
    // title: "First Slide",
    // description: "This is the first slider Image of our carousel",
    urls: shed,
    childrenI: (
      <div className="slider-content" id="firstSlide">
        <img id="slider-gunabrosLogo" src={mainLogo} alt="Gunabros Logo" />
        <h3 id="main-slide-text">New Zealand Specialists in <br />Magnetic Systems and Components</h3>
        <Link to="/contact" className="linkButton">CONTACT US NOW</Link>
      </div>
    ),
  },
  {
    // title: "First Slide",
    // description: "This is the first slider Image of our carousel",
    urls: welder,
    childrenI: (
      <div className="slider-content" id="secondSlide">
        <h2 id="second-main-slide-text">We can tailor make components to </h2>
        <h2 id="second-main-slide-text2">the specifications you require</h2>
        <br />
        <Link to="/products" id="second-main-slide-link" className="linkButton">VIEW OUR PRODUCTS</Link>
      </div>
    ),
  },
  // {
  //   title: "Fifth Slide",
  //   description: "This is the Fifth slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(147).jpg",
  // },
  // {
  //   title: "Sixth Slide",
  //   description: "This is the Sixth slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
  // },
  // {
  //   title: "Seventh Slide",
  //   description: "This is the Seventh slider Image of our carousel",
  //   urls: "https://mdbootstrap.com/img/Photos/Slides/img%20(102).jpg",
  // },
];

export default arr;
