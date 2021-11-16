import { Link } from "react-router-dom";

function HomeProductImage(props) {

    return (
        <Link to="/products/conveyors">
            <div className="home-prod-img">
                <img src={props.src} alt={props.title}/>
                <div>
                    <h6>{props.title}</h6>
                </div>
            </div>
        </Link>
        
    );
}

export default HomeProductImage;