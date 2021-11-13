import SubHeader from "./sub/SubHeader.js";
import Breadcrumbs from "./sub/Breadcrumbs.js";


function Products() {

    return (
        <div className="transitionInOnload">
            <SubHeader title="Products" />
            <Breadcrumbs items={[
                {name: "Home", link: ".."},
                {name: "Products"}
                ]}/>
        </div>
    );
}


export default Products;