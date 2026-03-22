const About = () => {
  return (
    <div className='container py-5 my-5'>
      <div className="row g-5 align-items-center">
        
        {/* Left: Image Section */}
        <div className="col-lg-5">
          <div className="product-img-wrapper shadow-sm">
             <img 
               src="http://localhost:5000/images/Pop-Product1.jpg" 
               className="product-img" 
               alt="Collector Items" 
             />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="col-lg-7 ps-lg-5">
          <p className="text-muted small text-uppercase mb-2" style={{ letterSpacing: '3px' }}>
            Our Story
          </p>
          <h1 className="display-4 mb-4">About Pop Mart</h1>

          <div className="content-text pe-lg-5">
            <p className="lead fw-light mb-4 text-secondary">
              Welcome to the ultimate destination for collectors and vinyl art enthusiasts. 
              We curate the rarest designer figurines and blind boxes.
            </p>

            <p className="mb-4 fw-light">
              We believe toys are pieces of art that express personality. From the dark elegance of 
              <span className="fw-bold"> SKULLPANDA</span> to the playful mischief of 
              <span className="fw-bold"> The MONSTERS</span>, each piece meets the standards 
              of the most passionate collectors.
            </p>
          </div>

          {/* Stats Section - Minimalist Style */}
          <div className="row mt-5 pt-4 border-top">
            <div className="col-4">
              <h4 className="mb-0 fw-bold">100%</h4>
              <p className="small text-muted text-uppercase mt-1" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>Authentic</p>
            </div>
            <div className="col-4 border-start">
              <h4 className="mb-0 fw-bold ps-3">50+</h4>
              <p className="small text-muted text-uppercase mt-1 ps-3" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>Series</p>
            </div>
            <div className="col-4 border-start">
              <h4 className="mb-0 fw-bold ps-3">24/7</h4>
              <p className="small text-muted text-uppercase mt-1 ps-3" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>Support</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;