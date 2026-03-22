import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const { cart } = useContext(CartContext);
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    const activeStyle = ({ isActive }) => ({
        color: isActive ? (isDarkMode ? '#fff' : '#000') : (isDarkMode ? '#888' : '#777'),
        borderBottom: isActive ? `1px solid ${isDarkMode ? '#fff' : '#000'}` : 'none',
        borderRadius: 0,
        paddingBottom: '2px',
        transition: 'all 0.3s ease'
    });

    return (
        <>
            {/* ======================= DESKTOP STACKED NAVBAR ======================= */}
            <nav className={`d-none d-lg-block sticky-top shadow-none ${isDarkMode ? 'bg-dark border-secondary' : 'bg-white border-bottom'}`}>
                
                {/* TOP LAYER: Branding & Tools */}
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-4"></div> {/* Spacer for center alignment */}
                        
                        <div className="col-4 text-center">
                            <Link className="navbar-brand m-0" to="/" style={{ 
                                fontFamily: "var(--serif)", 
                                fontSize: '2.5rem',
                                color: isDarkMode ? '#fff' : '#000',
                                letterSpacing: '-1.5px',
                                fontWeight: '700'
                            }}>
                                POP MART
                            </Link>
                        </div>

                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <div className="me-4 hover-opacity" onClick={() => setIsDarkMode(!isDarkMode)} style={{ cursor: 'pointer' }}>
                                <i className={`fa ${isDarkMode ? 'fa-sun text-white' : 'fa-moon text-dark'}`}></i>
                            </div>
                            <NavLink className="nav-link position-relative p-0" to="/cart">
                                <i className={`fa fa-shopping-bag fs-5 ${isDarkMode ? 'text-white' : 'text-dark'}`}></i>
                                {totalQty > 0 && (
                                    <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${isDarkMode ? 'bg-white text-dark' : 'bg-dark text-white'}`} 
                                          style={{ fontSize: '0.55rem', padding: '0.4em 0.6em' }}>
                                        {totalQty}
                                    </span>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* BOTTOM LAYER: Navigation Links Sub-header */}
                <div className={`border-top py-2 ${isDarkMode ? 'border-secondary' : 'border-light'}`}>
                    <div className="container d-flex justify-content-center">
                        <NavLink to="/products" style={activeStyle} className="nav-link small fw-bold text-uppercase mx-4 pe-0">Shop</NavLink>
                        <NavLink to="/About" style={activeStyle} className="nav-link small fw-bold text-uppercase mx-4 pe-0">Story</NavLink>
                        <NavLink to="/policies" style={activeStyle} className="nav-link small fw-bold text-uppercase mx-4 pe-0">Policies</NavLink>
                        <NavLink to="/Contact" style={activeStyle} className="nav-link small fw-bold text-uppercase mx-4 pe-0">Contact</NavLink>
                    </div>
                </div>
            </nav>

            {/* ======================= MOBILE BOTTOM NAVBAR ======================= */}
            <nav className={`navbar fixed-bottom ${isDarkMode ? 'bg-dark border-secondary' : 'bg-white border-top'} d-lg-none py-3 shadow-lg`}>
                <div className="container-fluid d-flex justify-content-around align-items-center">
                    <NavLink to="/" end className={({ isActive }) => isActive ? (isDarkMode ? "text-white" : "text-dark") : "text-muted opacity-50"}>
                        <i className="fa fa-home fs-5"></i>
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? (isDarkMode ? "text-white" : "text-dark") : "text-muted opacity-50"}>
                        <i className="fa fa-th-large fs-5"></i>
                    </NavLink>
                    <NavLink to="/policies" className={({ isActive }) => isActive ? (isDarkMode ? "text-white" : "text-dark") : "text-muted opacity-50"}>
                        <i className="fa fa-file-text fs-5"></i>
                    </NavLink>
                    <div onClick={() => setIsDarkMode(!isDarkMode)} style={{ cursor: 'pointer' }} className="p-2 bg-light rounded-circle shadow-sm">
                        <i className={`fa ${isDarkMode ? 'fa-sun text-warning' : 'fa-moon text-dark'} fs-5`}></i>
                    </div>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? (isDarkMode ? "text-white position-relative" : "text-dark position-relative") : "text-muted opacity-50 position-relative"}>
                        <i className="fa fa-shopping-bag fs-5"></i>
                        {totalQty > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "9px" }}>
                                {totalQty}
                            </span>
                        )}
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;