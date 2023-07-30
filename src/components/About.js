
import { Link } from "react-router-dom";
import SubHeader from "./sub/SubHeader.js";
import Breadcrumbs from "./sub/Breadcrumbs.js";
import welder from "../assets/img-welder.jpg";
import HideNav from './main/HideNav.js';

function About(props) {

    return (
        <div id="about-page">
            <HideNav setDropMenu={props.setDropMenu}/>
            <SubHeader title="About Us" />
            <Breadcrumbs items={[
                {name: "Home", link: ".."},
                {name: "About Us"}
                ]}/>
            <div id="about-center">
                <div id="about-left-panel">
                    <img src={welder} alt="welder-img" className="transitionInZoomOnload"/>
                </div>
                <div id="about-right-panel">
                    <h2 className="transitionInOnload">Who We Are</h2>
                    <p className="transitionInZoomOnload">Gunabros Systems has over 15 years of manufacturing excellence, and a passion for producing high-quality precision-engineered products and services to the food industry. We have manufactured equipment for some of the biggest food providers in New Zealand including Fonterra.</p>
                    <p className="transitionInZoomOnload">With a team of highly skilled tradesmen we aim at providing affordable, top quality solutions to our clients.</p>
                    <p className="transitionInZoomOnload">Please feel free to contact us to provide you with consultancy and a quote for your new project, or to advise you on the best solution for your industry.</p>

                    <Link to="/contact" className="linkButton">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}


export default About;