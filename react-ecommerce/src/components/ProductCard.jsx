import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card fade-in">
            <div className="product-img-wrapper">
                {product.discount && (
                    <div className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small fw-bold" 
                         style={{ zIndex: 2, fontSize: '0.6rem', letterSpacing: '1px' }}>
                        -{product.discount}%
                    </div>
                )}
                <img src={product.image} className="product-img" alt={product.name} />
            </div>

            <div className="pt-2">
                <p className="text-muted mb-1 text-uppercase small" style={{ letterSpacing: '2px', fontSize: '0.6rem' }}>
                    {product.category || 'Editorial'}
                </p>
                <h6 className="fw-bold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                    {product.name}
                </h6>
                <p className="price-tag mb-3">₱{product.price.toLocaleString()}</p>
                
                <button 
                    className="btn-lux w-100" 
                    onClick={() => addToCart(product)}
                >
                    Add to Bag
                </button>
            </div>
        </div>
    );
};

export default ProductCard;