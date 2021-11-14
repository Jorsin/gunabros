import SubHeader from "./sub/SubHeader.js";
import Breadcrumbs from "./sub/Breadcrumbs.js";

function Services() {

    return (
        <div>
            <SubHeader title="Services" />
            <Breadcrumbs items={[
                {name: "Home", link: ".."},
                {name: "Services"}
                ]}/>
        </div>
    );
}


export default Services;