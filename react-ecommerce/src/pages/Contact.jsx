const Contact = () => {
  return (
    <div className="container py-5 my-5 fade-in"> {/* Added fade-in here */}
      <div className="row g-5">
        
        {/* Left: Form Section */}
        <div className="col-lg-6">
          <p className="small text-uppercase mb-2 lux-label" style={{ letterSpacing: '3px' }}>
            Inquiries
          </p>
          <h1 className="display-5 mb-4 fw-bold">Contact Us</h1>
          <p className="mb-5 fw-light pe-lg-5 opacity-75">
            Have questions about a specific blind box or figurine? Our editorial team is here to assist you with your collection.
          </p>

          <form className="pe-lg-5">
            <div className="mb-4">
              <label className="form-label small text-uppercase fw-bold">Full Name</label>
              <input 
                type="text" 
                className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" 
                placeholder="Name" 
              />
            </div>

            <div className="mb-4">
              <label className="form-label small text-uppercase fw-bold">Email Address</label>
              <input 
                type="email" 
                className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" 
                placeholder="Email" 
              />
            </div>

            <div className="mb-4">
              <label className="form-label small text-uppercase fw-bold">Your Message</label>
              <textarea 
                className="form-control border-0 border-bottom rounded-0 px-0 bg-transparent" 
                rows="4" 
                placeholder="Message"
              ></textarea>
            </div>

            <button className="btn-lux w-100 py-3 mt-4">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div className="col-lg-5 offset-lg-1 d-flex flex-column justify-content-center mt-5 mt-lg-0">
          <div className="p-0">
            <h4 className="mb-4 text-uppercase small fw-bold" style={{ letterSpacing: '2px' }}>
              Flagship Store
            </h4>
            <p className="mb-5 fw-light opacity-75">
              Experience the latest editorial arrivals in person. Our curators are ready to welcome you.
            </p>
            
            <div className="mb-5">
              <p className="small text-uppercase fw-bold mb-1" style={{ letterSpacing: '1px' }}>Address</p>
              <p className="fw-light opacity-75">123 Collector's Lane, Metro Manila, PH</p>
            </div>

            <div className="mb-5">
              <p className="small text-uppercase fw-bold mb-1" style={{ letterSpacing: '1px' }}>Phone</p>
              <p className="fw-light opacity-75">+63 912 345 6789</p>
            </div>

            <div className="mb-0">
              <p className="small text-uppercase fw-bold mb-1" style={{ letterSpacing: '1px' }}>Hours</p>
              <p className="fw-light opacity-75">Mon - Sun: 10:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;