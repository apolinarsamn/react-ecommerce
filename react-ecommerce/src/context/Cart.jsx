import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

    // Compute total price
    const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

    const formatPrice = (value) => {
        return value.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="container py-5 my-5">
            <div className="text-center mb-5">
                <p className="text-muted small text-uppercase mb-2" style={{ letterSpacing: '3px' }}>Your Selection</p>
                <h1 className="display-5" style={{ fontFamily: 'var(--serif)' }}>Shopping Bag</h1>
            </div>

            {cart.length === 0 ? (
                <div className="text-center py-5">
                    <p className="text-muted mb-4">Your bag is currently empty.</p>
                    <Link to="/products" className="btn-lux text-decoration-none">Return to Shop</Link>
                </div>
            ) : (
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Table Header - Minimalist */}
                        <div className="d-none d-md-flex border-bottom pb-2 mb-4 text-uppercase small fw-bold" style={{ letterSpacing: '1px' }}>
                            <div className="col-6">Product</div>
                            <div className="col-3 text-center">Quantity</div>
                            <div className="col-3 text-end">Subtotal</div>
                        </div>

                        {/* Cart Items */}
                        {cart.map(item => (
                            <div key={item.id} className="row align-items-center mb-4 pb-4 border-bottom">
                                {/* Product Info */}
                                <div className="col-12 col-md-6 d-flex align-items-center mb-3 mb-md-0">
                                    <div className="me-4" style={{ width: '80px', height: '100px', backgroundColor: '#f4f4f4', overflow: 'hidden' }}>
                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h5 className="mb-1 fw-bold" style={{ fontSize: '1rem' }}>{item.name}</h5>
                                        <p className="text-muted small mb-2">₱{formatPrice(item.price)}</p>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="btn p-0 text-muted small text-uppercase" 
                                            style={{ fontSize: '0.65rem', letterSpacing: '1px', borderBottom: '1px solid #ccc', borderRadius: 0 }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="col-6 col-md-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button 
                                            onClick={() => decreaseQty(item.id)}
                                            className="btn btn-sm border-0"
                                        >—</button>
                                        <span className="mx-3 small fw-bold">{item.qty}</span>
                                        <button 
                                            onClick={() => increaseQty(item.id)}
                                            className="btn btn-sm border-0"
                                        >+</button>
                                    </div>
                                </div>

                                {/* Subtotal */}
                                <div className="col-6 col-md-3 text-end">
                                    <span className="fw-bold">₱{formatPrice(item.price * item.qty)}</span>
                                </div>
                            </div>
                        ))}

                        {/* Summary & Checkout */}
                        <div className="row mt-5 pt-4">
                            <div className="col-md-6 offset-md-6">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>Total</h5>
                                    <h4 className="fw-bold">₱{formatPrice(total)}</h4>
                                </div>
                                <Link to="/checkout" className="btn-lux w-100 d-block text-center text-decoration-none py-3">
                                    Secure Checkout
                                </Link>
                                <p className="text-center mt-3 text-muted small italic" style={{ fontSize: '0.75rem' }}>
                                    Shipping & taxes calculated at checkout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;