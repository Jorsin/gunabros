import SubHeader from "./sub/SubHeader.js";
import Breadcrumbs from "./sub/Breadcrumbs.js";
import { Routes, Route, Link } from "react-router-dom";
import All from "./products/All.js";
import Conveyors from "./products/Conveyors.js";
import Components from "./products/Components.js";
import React, { useState } from "react";

function Products() {

    const [activeLink, setActiveLink] = useState("");
    const [breadcrumbs, setBreadcrumbs] = useState([
        {name: "Home", link: ".."},
        {name: "Products"}
        ]);

    return (
        <div>
            <SubHeader title="Products" />
            <Breadcrumbs items={breadcrumbs}/>
            
            <div id="productListNav" className="transitionInOnload">
                <div id="productListNav-center">
                    <Link to="/products" className={activeLink === "All" ? "productListLink activeLink": "productListLink"}>All</Link>
                    <Link to="/products/conveyors" className={activeLink === "Conveyors" ? "productListLink activeLink": "productListLink"}>Conveyors</Link>
                    <Link to="/products/components" className={activeLink === "Components" ? "productListLink activeLink": "productListLink"}>Components</Link>
                </div>
            </div>
            
            <Routes>
                <Route path={"/"} exact element={<All setActiveLink={setActiveLink} setBreadcrumbs={setBreadcrumbs}/>} />
                <Route path={"/conveyors"} element ={<Conveyors setActiveLink={setActiveLink} setBreadcrumbs={setBreadcrumbs}/>} />
                <Route path={"/components"} element ={<Components setActiveLink={setActiveLink} setBreadcrumbs={setBreadcrumbs}/>} />
            </Routes>
        </div>
    );
}


export default Products;