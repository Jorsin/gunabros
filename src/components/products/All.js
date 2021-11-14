import ConveyorList from "./ConveyorList.js";
import ComponentList from "./ComponentList.js";
import Pagination from './Pagination';
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem.js";

function All(props) {
    
    // Pagination
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const setActive = () => props.setActiveLink("All");
    
    useEffect(() => {
        props.setBreadcrumbs([
            {name: "Home", link: ".."},
            {name: "Products"}
            ]);
        paginate(1);
        setActive();
        setPosts(ConveyorList.concat(ComponentList));
        // eslint-disable-next-line
    }, [])

    return (
        <div className="productList">
            <div className="productList-center">
                {currentPosts.map((item, index) => (
                    <ProductItem key={item.id} product={item}/>
                ))}

                <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={(x) => {
                    paginate(x);
                    window.scrollTo(0, 200);
                }}
                />
            </div>
        </div>
    );
}


export default All;