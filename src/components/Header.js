
import {
    Link
  } from "react-router-dom";


function Header() {

    return (
        <div>
            <div id="topBar">
                <div id="topBarDetails">
                    <span>
                        <img src={"./images/icons/phone-solid.svg"} alt=""/>
                        &nbsp;Call <a href="tel:+64 22 432 6554">+64 22 432 6554</a>
                    </span>

                    <span>
                        <img src={"./images/icons/map-marker-alt-solid.svg"} alt=""/>
                        &nbsp;141 Middle rd RD2 Hamilton  New Zealand 
                    </span>

                    <span>
                        <img src={"./images/icons/envelope-solid.svg"} id="mailIcon" alt=""/>
                        &nbsp;<a href="mailto:gunabros.systems@gamil.com">gunabros.systems@gamil.com</a>
                    </span>
                </div>
            </div>
            <div id="header">
                <a href="/" id="homeLogoLink">
                    <img src="./images/icons/gunabros-logo2.png" alt="Gunabros" title="Gunabros" className="transitionInOnload"/>
                </a>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/products" className="navLink">Products</Link>
                <Link to="/services" className="navLink">Services</Link>
                <Link to="/about" className="navLink">About Us</Link>
                <Link to="/contact" className="navLink">Contact</Link>
            </div>
        </div>
    );
}


export default Header;