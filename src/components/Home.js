import Slider from "./Slider/Slider.js";
import CubeSolid from "../assets/icons/cube-solid.svg";
import ToolsSolid from "../assets/icons/tools-solid.svg";
import EditSolid from "../assets/icons/edit-solid.svg";
import HomeProductImage from "./home/HomeProductImage.js";
import FonterraLogo from "../assets/clients/img-logo-fonterra-300x128.jpg"
import ArdaghLogo from "../assets/clients/img-logo-ardagh-300x128.jpg"

import ScrollToTop from './home/ScrollToTop.js';

import { Link } from "react-router-dom";

//Products
import Prod1 from "../assets/products/1.jpg";
import Prod2 from "../assets/products/2.jpg";
import Prod3 from "../assets/products/3.jpg";
import Prod4 from "../assets/products/4.jpg";
import Prod5 from "../assets/products/5.jpg";
import Prod6 from "../assets/products/6.jpg";


function Home() {

    return (
        <div id="homepage" className="transitionInOnload">
            <Slider />

            <h2 className="homeSubheading">Services</h2>
            <div id="homepage-services">
                <div id="services-design">
                    <span>
                        <img src={EditSolid} alt="Design icon" />
                    </span>
                    <h6>Design</h6>
                    <p>Our experience will provide you with the optimal solution for your needs. As a start to finish, bespoke manufacturer we can tailor make components to the specifications you require with innovative high quality design.</p>
                </div>
                <div id="serives-manufacture">
                    <span>
                        <img src={ToolsSolid} alt="Manufacture icon" />
                    </span>
                    <h6>Manufacture</h6>
                    <p>We combine extensive design experience together with state of art manufacturing processes to deliver not only a product or process that looks ascetically pleasing but one that is durable and functionally reliable.</p>
                </div>
                <div id="services-products">
                    <span>
                        <img src={CubeSolid} alt="Product icon" />
                    </span>
                    <h6>Product</h6>
                    <p>Being able to source top quality raw product to manufacture a wide range of products for our ever increasing customer base. Weather its magnetic components, feeders, hoppers, conveyors or complete production lines.</p>
                </div>
            </div>
            
            <div id="home-section2">
                <ScrollToTop />
                <h2 className="homeSubheading">Our Products</h2>
                <div id="our-products">
                    <div className="prod-row">
                        <HomeProductImage src={Prod1} title="Standard Delivery Conveyors: Stainless Steel" />
                        <HomeProductImage src={Prod2} title="Standard Delivery Conveyors: Quick Change Belt" />
                        <HomeProductImage src={Prod3} title="High Speed Delivery Conveyors" />
                    </div>
                    <div className="prod-row">
                        <HomeProductImage src={Prod4} title="High Speed, High Temp Curving/Cooling Conveyors" />
                        <HomeProductImage src={Prod5} title="Low Temperature Curving/Cooling Conveyors" />
                        <HomeProductImage src={Prod6} title="Scrap Removal Conveyors" />
                    </div>
                </div>
                
                <Link to="/products" className="linkButton">View All Products</Link>
            </div>
            
            <h2 className="homeSubheading">Our Clients</h2>
            <div id="our-clients">
                <div id="client-center">
                    <p>We have worked for top food providers in New Zealand and Abroad.</p>
                    <div id="client-imgs">
                        <img src={FonterraLogo} alt="Fonterra logo" />
                        <img src={ArdaghLogo} alt="Ardagh logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;