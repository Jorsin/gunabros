import SubHeader from "./sub/SubHeader.jsx";
import Breadcrumbs from "./sub/Breadcrumbs.jsx";
import { Routes, Route, Link } from "react-router-dom";
import All from "./products/All.jsx";
import Conveyors from "./products/Conveyors.jsx";
import Components from "./products/Components.jsx";
import React, { useState } from "react";
import HideNav from './main/HideNav.jsx';

function Products(props) {

    const [activeLink, setActiveLink] = useState("");
    const [breadcrumbs, setBreadcrumbs] = useState([
        { name: "Home", link: ".." },
        { name: "Products" }
    ]);

    return (
        <div>
            <HideNav setDropMenu={props.setDropMenu} />
            <SubHeader title="Products" />
            <Breadcrumbs items={breadcrumbs} />

            <div id="productListNav" className="transitionInOnload">
                <div id="productListNav-center">
                    <Link to="/products" className={activeLink === "All" ? "productListLink activeLink" : "productListLink"}>All</Link>
                    <Link to="/products/conveyors" className={activeLink === "Conveyors" ? "productListLink activeLink" : "productListLink"}>Conveyors</Link>
                    <Link to="/products/components" className={activeLink === "Components" ? "productListLink activeLink" : "productListLink"}>Components</Link>
                </div>
            </div>

            <Routes>
                <Route path={"/"} exact element={<All setActiveLink={setActiveLink} setBreadcrumbs={setBreadcrumbs} />} />
                <Route path={"/conveyors"} element={<Conveyors setActiveLink={setActiveLink} setBreadcrumbs={setBreadcrumbs} />} />
                <Route path={"/components"} element={<Components setActiveLink={setActiveLink} setBreadcrumbs={setBreadcrumbs} />} />
            </Routes>
        </div>
    );
}


export default Products;