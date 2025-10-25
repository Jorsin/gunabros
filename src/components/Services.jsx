import SubHeader from "./sub/SubHeader.jsx";
import Breadcrumbs from "./sub/Breadcrumbs.jsx";
import certification from "../assets/cert-testing.jpg";
import support from "../assets/tech-support.jpg";
import CubeSolid from "../assets/icons/cube-solid.svg";
import ToolsSolid from "../assets/icons/tools-solid.svg";
import EditSolid from "../assets/icons/edit-solid.svg";
import HideNav from './main/HideNav.jsx';

function Services(props) {

    return (
        <div>
            <HideNav setDropMenu={props.setDropMenu} />
            <SubHeader title="Services" />
            <Breadcrumbs items={[
                { name: "Home", link: ".." },
                { name: "Services" }
            ]} />

            <div id="services-center">
                <div id="services-content" className="transitionInOnload">
                    <h1>Services</h1>
                    <p>Gunabros has a level of service and experience that puts the customer at ease offering certification of magnetic systems and devices to both existing and new customers and technical support with practical advice.We provide a manufacturing improvement service where we analyse your processes to see if our integrated systems can be of help to reduce the man- handling involved in your factory.</p>

                    <div id="service-types">
                        <div id="certification">
                            <img src={certification} alt="Certification testing" />
                            <h1>Certification and Testing</h1>
                            <p>Compliance requires that magnetic separation equipment used for the removal of food contaminates are tested and certified. Gunabros offers this service providing a report identifying the type of magnet, the surface gauss reading, its integrity and condition and weather it has passed or failed.</p>
                        </div>
                        <div id="support">
                            <img src={support} alt="Technical support" />
                            <h1>Technical Support</h1>
                            <p>Know what you want, but are struggling to consider the alternatives that could be available? Using our experience of where and how it will be used we can give advice allowing a better selection of product. Give us a call and we can assess your operation and add value to your bottom line.</p>
                        </div>
                    </div>

                    <h1>How We Work</h1>
                    <div id="process-breakdown">
                        <div id="process-design">
                            <span>
                                <img src={EditSolid} alt="Design icon" />
                            </span>
                            <h6>Design</h6>
                            <p>Our experience will provide you with the optimal solution for your needs. As a start to finish, bespoke manufacturer we can tailor make components to the specifications you require.</p>
                        </div>
                        <div id="process-manufacture">
                            <span>
                                <img src={ToolsSolid} alt="Manufacture icon" />
                            </span>
                            <h6>Manufacture</h6>
                            <p>We combine extensive design experience together with state of art manufacturing processes to deliver not only a product or process that looks ascetically pleasing but one that is durable and functionally reliable.</p>
                        </div>
                        <div id="process-products">
                            <span>
                                <img src={CubeSolid} alt="Products icon" />
                            </span>
                            <h6>Products</h6>
                            <p>Being able to source top quality raw product enables Gunabros to manufacture a wide range of products for our ever increasing customer base. Weather its magnetic components, feeders, hoppers, conveyors or complete production lines</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Services;