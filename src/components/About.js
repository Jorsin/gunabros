import SubHeader from "./sub/SubHeader.js";
import Breadcrumbs from "./sub/Breadcrumbs.js";


function About() {

    return (
        <div>
            <SubHeader title="About" />
            <Breadcrumbs items={[
                {name: "Home", link: ".."},
                {name: "About"}
                ]}/>
        </div>
    );
}


export default About;