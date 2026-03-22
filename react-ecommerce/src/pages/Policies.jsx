const Policies = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Header Section */}
          <div className="text-center mb-5">
            <p className="text-muted small text-uppercase mb-2" style={{ letterSpacing: '3px' }}>
              Terms of Service
            </p>
            <h1 className="display-4 mb-3" style={{ fontFamily: 'var(--serif)' }}>Store Policy</h1>
            <p className="text-muted small">
              Last Updated: March 2026
            </p>
          </div>

          <div className="policy-content pe-lg-4" style={{ lineHeight: '1.8' }}>
            
            <section className="mb-5">
              <h5 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: '2px' }}>
                01. General Collector's Agreement
              </h5>
              <p className="fw-light text-secondary">
                Pop Mart Store provides authentic designer figurines, blind boxes, and limited edition art toys. 
                By purchasing from our store, you acknowledge the "surprise" nature of blind boxes and agree to the collector's terms stated below.
              </p>
            </section>

            <section className="mb-5">
              <h5 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: '2px' }}>
                02. Product & Authenticity
              </h5>
              <ul className="fw-light text-secondary list-unstyled">
                <li className="mb-2">— All figurines are 100% authentic and sourced directly from official distributors.</li>
                <li className="mb-2">— For <strong>Blind Boxes</strong>: The specific figure inside is unknown until opened.</li>
                <li className="mb-2">— Minor paint defects are part of the mass-production process and are not considered damaged items.</li>
              </ul>
            </section>

            <section className="mb-5">
              <h5 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: '2px' }}>
                03. Shipping & Handling
              </h5>
              <p className="fw-light text-secondary">
                We use premium bubble wrap and sturdy outer boxes to protect your collectibles. 
                Orders are processed within 1–2 business days. While we assist in claims, we are not liable for courier mishandling.
              </p>
            </section>

            
            <section className="mb-5 p-4 border bg-transparent">
              <h5 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: '2px' }}>
                04. Mandatory Unboxing Policy
              </h5>
              <p className="small mb-0 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
                An unedited unboxing video is mandatory for any return or refund claims. 
              </p>
              <p className="small text-muted mt-2 mb-0">
                The video must show the sealed pouch/box being opened for the first time. 
                Issues must be reported within 48 hours of delivery.
              </p>
            </section>

            <section className="mb-5">
              <h5 className="text-uppercase small fw-bold mb-3" style={{ letterSpacing: '2px' }}>
                05. Returns & Intellectual Property
              </h5>
              <p className="fw-light text-secondary">
                Returns are only accepted for wrong items or severely broken figurines. 
                "Change of mind" is not a valid reason for return. 
                All character designs (SKULLPANDA, The MONSTERS, etc.) remain the property of their respective artists.
              </p>
            </section>

            <div className="text-center mt-5 pt-5 border-top">
              <p className="small text-muted italic">
                For further inquiries, please reach out via our Contact Page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;