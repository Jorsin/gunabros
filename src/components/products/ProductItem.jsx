function ProductItem({ product }) {
    // Use import.meta.glob to load all images eagerly
    const modules = import.meta.glob('../../assets/products/*.{png,jpg,jpeg,svg}', { eager: true });

    // Map file names to imported URLs
    const images = {};
    for (const path in modules) {
        const filename = path.split('/').pop();  // extract filename, e.g. "0.jpg"
        images[filename] = modules[path].default; // URL string for image
    }

    return (
        <div className="productItem transitionInOnload">
            {/* Safely access image URL, fallback to empty string if missing */}
            <img src={images[product.id + '.jpg'] || ''} alt={product.name} />
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
