
import { Link } from "react-router-dom";
import PhoneSolid from "../../assets/icons/phone-solid.svg";
import MapMarker from "../../assets/icons/map-marker-alt-solid.svg";
import MailIcon from "../../assets/icons/envelope-solid.svg";
import GunabrosLogo from "../../assets/icons/gunabros-logo2.png";

function Header(props) {

    // const [dropMenu, setDropMenu] = useState("hideNav");

    return (
        <>
            <div id="topBar">
                <div id="topBarDetails">
                    <span>
                        <img src={PhoneSolid} alt=""/>
                        &nbsp;Call <a href="tel:+64 22 432 6554">+64 22 432 6554</a>
                    </span>

                    <span>
                        <img src={MapMarker} alt=""/>
                        &nbsp;141 Middle rd RD2 Hamilton  New Zealand 
                    </span>

                    <span>
                        <img src={MailIcon} id="mailIcon" alt=""/>
                        &nbsp;<a href="mailto:gunabros.systems@gmail.com">gunabros.systems@gmail.com</a>
                    </span>
                </div>
            </div>
            <div id="header">
                <div id="logoBox">
                    <a href="/" id="homeLogoLink">
                        <img src={GunabrosLogo} alt="Gunabros" title="Gunabros" className="transitionInOnload"/>
                    </a>
                </div>
                <div id="btnNav" onClick={() => props.setDropMenu((prev) => prev === "" ? "hideNav" : "")}>
                    &#9776; <span>Navigation Menu</span>
                </div>
                <div id="nav-links" className={props.dropMenu}>
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/products" className="navLink">Products</Link>
                    <Link to="/services" className="navLink">Services</Link>
                    <Link to="/about" className="navLink">About Us</Link>
                    <Link to="/contact" className="navLink">Contact</Link>
                </div>
            </div>
        </>
    );
}


export default Header;