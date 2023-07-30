

function ProductItem({product}) {
    function importAll(r) {
        let images = {};

        for(var i=0; i<r.keys().length; i++){
            images[r.keys()[i].replace('./', '')] = r(r.keys()[i]);
        }

        // console.log(images['0.jpg']);
        return images;
    }
    
    const images = importAll(require.context('../../assets/products', false, /\.(png|jpe?g|svg|jpg)$/));

    return (
        <div className="productItem transitionInOnload">
            <img src={images[product.id + '.jpg'] && images[product.id + '.jpg'].default} alt={product.name}/>
            <div className="productDescription">
                <h2>{product.name}</h2>
                <ul>
                    {product.points.map((point, index) => (
                        <li key={index}><span>{point}</span></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default ProductItem;