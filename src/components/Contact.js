import Breadcrumbs from "./sub/Breadcrumbs.js";
import SubHeader from "./sub/SubHeader.js";



function Contact() {

    return (
        <div className="transitionInOnload">
            <SubHeader title="Contact" />
            <Breadcrumbs items={[
                {name: "Home", link: ".."},
                {name: "Contact"}
                ]}/>
        </div>
    );
}


export default Contact;