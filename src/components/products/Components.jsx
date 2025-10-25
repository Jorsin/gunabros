import ComponentList from "./ComponentList.jsx";
import { useEffect } from "react";
import ProductItem from "./ProductItem.jsx";

function Components(props) {

    useEffect(() => {
        props.setBreadcrumbs([
            { name: "Home", link: ".." },
            { name: "Products", link: "/products" },
            { name: "Components" }
        ]);
        props.setActiveLink("Components");
        // eslint-disable-next-line
    }, [])

    return (
        <div className="productList">
            <div className="productList-center">
                {ComponentList.map((item, index) => (
                    <ProductItem key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}


export default Components;