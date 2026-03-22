import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        payment: 'cod'
    });

    const [submitted, setSubmitted] = useState(false);
    const [finalTotal, setFinalTotal] = useState(0);

    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
    const tax = subtotal * 0.12; 
    const total = subtotal + tax;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.address || !form.phone) {
            alert("Please complete all fields");
            return;
        }
        setFinalTotal(total);
        clearCart(); 
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container mt-5 text-center py-5">
                <p className="text-muted small text-uppercase mb-2" style={{ letterSpacing: '3px' }}>Success</p>
                <h2 className="display-5 mb-4" style={{ fontFamily: 'var(--serif)' }}>Order Confirmed</h2>
                <p className="lead fw-light">Thank you, <strong>{form.name}</strong>. Your editorial selection is being prepared.</p>
                <div className="mt-4 border-top border-bottom py-3 d-inline-block px-5">
                   <p className="mb-0 small text-uppercase fw-bold">Total Amount: ₱{finalTotal.toFixed(2)}</p>
                </div>
                <div className="mt-5">
                    <a href="/" className="btn-lux text-decoration-none">Return to Shop</a>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 pt-5 mb-5">
            <h1 className="mb-5 text-center display-5">Checkout</h1>

            <div className="row g-5">
                {/* Checkout Form */}
                <div className="col-md-7">
                    <h5 className="mb-4 text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>Shipping Details</h5>
                    <form onSubmit={handleSubmit} className="pe-lg-5">
                        <div className="mb-4">
                            <label className="form-label small text-uppercase text-muted">Full Name</label>
                            <input type="text" name="name" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label small text-uppercase text-muted">Email Address</label>
                            <input type="email" name="email" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label className="form-label small text-uppercase text-muted">Shipping Address</label>
                            <textarea name="address" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" rows="2" onChange={handleChange} required></textarea>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <label className="form-label small text-uppercase text-muted">Phone Number</label>
                                <input type="text" name="phone" className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-4">
                                <label className="form-label small text-uppercase text-muted">Payment</label>
                                <select name="payment" className="form-select border-0 border-bottom rounded-0 px-0 bg-transparent" onChange={handleChange}>
                                    <option value="cod">Cash on Delivery</option>
                                    <option value="gcash">GCash</option>
                                    <option value="card">Credit Card</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn-lux w-100 mt-4 py-3">Complete Purchase</button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="col-md-5">
                    <div className="p-4 border">
                        <h5 className="mb-4 text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>Summary</h5>
                        <div className="order-items mb-4">
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between mb-3 align-items-center">
                                    <span className="small">{item.name} <span className="text-muted">x{item.qty || 1}</span></span>
                                    <span className="small fw-bold">₱{(item.price * (item.qty || 1)).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-top pt-3">
                            <div className="d-flex justify-content-between mb-2 small">
                                <span>Subtotal</span>
                                <span>₱{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 small text-muted">
                                <span>Tax (12%)</span>
                                <span>₱{tax.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between pt-3 border-top">
                                <span className="fw-bold text-uppercase">Total</span>
                                <span className="fw-bold h5">₱{total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;