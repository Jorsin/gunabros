import ConveyorList from "./ConveyorList.js";
import { useEffect } from "react";
import ProductItem from "./ProductItem.js";


function Conveyors(props) {

    useEffect(() => {
        props.setBreadcrumbs([
            {name: "Home", link: ".."},
            {name: "Products", link: "/products"},
            {name: "Conveyors"}
            ]);
        props.setActiveLink("Conveyors");
        // eslint-disable-next-line
    }, [])

    return (
        <div className="productList">
            <div className="productList-center">
                {ConveyorList.map((item, index) => (
                    <ProductItem key={item.id} product={item}/>
                ))}
            </div>
        </div>
    );
}

export default Conveyors;