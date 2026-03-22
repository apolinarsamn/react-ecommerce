const Footer = ({ isDarkMode }) => { 
    return (
        <footer className={`pt-5 pb-4 mt-5 border-top ${isDarkMode ? 'bg-dark text-white border-secondary' : 'bg-white text-dark'}`}>
            <div className="container py-4">
                <div className="row text-center text-md-start g-4">
                    
                    {/* Brand Section */}
                    <div className="col-md-4 col-lg-4">
                        <h5 className="text-uppercase mb-4 fw-bold" style={{ 
                            letterSpacing: '4px', 
                            fontFamily: 'var(--serif)',
                            color: isDarkMode ? '#fff' : '#000' 
                        }}>
                            Pop Mart
                        </h5>
                        <p className={`${isDarkMode ? 'text-light' : 'text-muted'} small fw-light`} style={{ maxWidth: '250px', lineHeight: '1.8' }}>
                            An editorial destination for the rarest figurines and designer art toys. Curating creativity for the modern collector.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 col-lg-2 offset-lg-2">
                        <h6 className="text-uppercase mb-4 small fw-bold" style={{ letterSpacing: '2px' }}>Explore</h6>
                        <ul className="list-unstyled fw-light small">
                            <li className="mb-2"><a href="/products" className={`${isDarkMode ? 'text-light' : 'text-muted'} text-decoration-none hover-dark`}>Collections</a></li>
                            <li className="mb-2"><a href="/about" className={`${isDarkMode ? 'text-light' : 'text-muted'} text-decoration-none hover-dark`}>Our Story</a></li>
                            <li className="mb-2"><a href="/policy" className={`${isDarkMode ? 'text-light' : 'text-muted'} text-decoration-none hover-dark`}>Store Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 col-lg-4">
                        <h6 className="text-uppercase mb-4 small fw-bold" style={{ letterSpacing: '2px' }}>Contact</h6>
                        <p className={`${isDarkMode ? 'text-light' : 'text-muted'} small mb-1 fw-light`}>Manila, Philippines</p>
                        <p className={`${isDarkMode ? 'text-light' : 'text-muted'} small mb-1 fw-light`}>support@popmart.com</p>
                        <p className={`${isDarkMode ? 'text-light' : 'text-muted'} small fw-light`}>+63 912 345 6789</p>
                        
                        <div className="mt-4">
                            <a href="#" className={isDarkMode ? 'text-white me-3' : 'text-dark me-3'}><i className="fab fa-facebook-f fa-sm"></i></a>
                            <a href="#" className={isDarkMode ? 'text-white me-3' : 'text-dark me-3'}><i className="fab fa-instagram fa-sm"></i></a>
                            <a href="#" className={isDarkMode ? 'text-white' : 'text-dark'}><i className="fab fa-twitter fa-sm"></i></a>
                        </div>
                    </div>

                </div>

                <hr className={`my-5 ${isDarkMode ? 'bg-light opacity-25' : 'opacity-25'}`} />

                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                        <p className={`${isDarkMode ? 'text-light' : 'text-muted'} mb-0`} style={{ fontSize: '0.65rem', letterSpacing: '2px' }}>
                            &copy; 2026 POP MART STORE — ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;