import Breadcrumbs from "./sub/Breadcrumbs.js";
import SubHeader from "./sub/SubHeader.js";



function Contact() {

    return (
        <div>
            <SubHeader title="Contact" />
            <Breadcrumbs items={[
                {name: "Home", link: ".."},
                {name: "Contact"}
                ]}/>

            <div id="contact-center" className="transitionInOnloadLong">
                <div id="mapWrapper" className="transitionInOnloadLong">
                    <iframe title="address" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3150.1933248144774!2d175.3269632!3d-37.8557667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1e44e6eb3f21%3A0xa7adb0d28b135ceb!2s141+Middle+Rd%2C+Rukuhia+3282!5e0!3m2!1sen!2snz!4v1418682651077" width="100%" height="400px" frameBorder="0" style={{border:0}}></iframe>
                </div>
            </div>
        </div>
    );
}


export default Contact;