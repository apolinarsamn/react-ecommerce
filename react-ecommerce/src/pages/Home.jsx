import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar"; 
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap"; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://react-ecommerce-api-zpw8.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const featuredProducts = products.slice(0, 6); 

  return (
    <div className="lux-home fade-in">
      
      {/* FULL WIDTH HERO SECTION */}
      <section className="hero-viewport">
        <Carousel fade indicators={true} controls={true} interval={5000} pause={false}>
          <Carousel.Item className="hero-item">
            <img className="hero-img" src="/Banner1.webp" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item className="hero-item">
            <img className="hero-img" src="/Banner2.webp" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item className="hero-item">
            <img className="hero-img" src="/Banner3.webp" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* CONTENT GRID */}
      <div className="container mt-5 pt-3">
        <div className="row">
          
          {/* LEFT: SIDEBAR (3 columns) */}
          <aside className="col-md-3 sidebar-column mb-5">
            <Sidebar />
          </aside>

          {/* RIGHT: PRODUCTS (9 columns) */}
          <main className="col-md-9">
            <div className="text-center mb-5">
              <p className="small text-uppercase mb-2" style={{ letterSpacing: '3px', opacity: 0.6 }}>
                The Selection
              </p>
              <h2 className="display-6 mb-3" style={{ fontFamily: "var(--serif)" }}>
                Best Mini Figurines
              </h2>
              <p className="mx-auto fw-light" style={{ maxWidth: '600px', fontSize: '1rem', opacity: 0.7 }}>
                Curated arrivals for those who appreciate designer art toys.
              </p>
            </div>

            {/* PRODUCT GRID - Responsive spacing */}
            <div className="row g-4">
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <div key={product.id} className="col-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="small text-uppercase" style={{ letterSpacing: '2px', opacity: 0.5 }}>
                    Loading...
                  </p>
                </div>
              )}
            </div>

            <div className="text-center my-5">
              <Link to="/products" className="btn-lux text-decoration-none">
                View All Collections
              </Link>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Home;