const Footer = () => { 
    return (
        /* 'footer-lux' handles the background and base color automatically via CSS */
        <footer className="footer-lux pt-5 pb-4 mt-5 border-top">
            <div className="container py-4">
                <div className="row text-center text-md-start g-4">
                    
                    {/* Brand Section */}
                    <div className="col-md-4 col-lg-4">
                        <h5 className="text-uppercase mb-4 fw-bold footer-title">
                            Pop Mart
                        </h5>
                        <p className="small fw-light footer-text">
                            An editorial destination for the rarest figurines and designer art toys. Curating creativity for the modern collector.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 col-lg-2 offset-lg-2">
                        <h6 className="text-uppercase mb-4 small fw-bold footer-heading">Explore</h6>
                        <ul className="list-unstyled fw-light small">
                            <li className="mb-2"><a href="/products" className="footer-link">Collections</a></li>
                            <li className="mb-2"><a href="/about" className="footer-link">Our Story</a></li>
                            <li className="mb-2"><a href="/policy" className="footer-link">Store Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 col-lg-4">
                        <h6 className="text-uppercase mb-4 small fw-bold footer-heading">Contact</h6>
                        <p className="small mb-1 fw-light footer-text">Manila, Philippines</p>
                        <p className="small mb-1 fw-light footer-text">support@popmart.com</p>
                        <p className="small fw-light footer-text">+63 912 345 6789</p>
                        
                        <div className="mt-4">
                            <a href="#" className="footer-icon me-3"><i className="fab fa-facebook-f fa-sm"></i></a>
                            <a href="#" className="footer-icon me-3"><i className="fab fa-instagram fa-sm"></i></a>
                            <a href="#" className="footer-icon"><i className="fab fa-twitter fa-sm"></i></a>
                        </div>
                    </div>

                </div>

                {/* Divider - follows CSS variable opacity */}
                <hr className="footer-divider my-5" />

                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                        <p className="footer-copy mb-0">
                            &copy; 2026 POP MART STORE — ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;