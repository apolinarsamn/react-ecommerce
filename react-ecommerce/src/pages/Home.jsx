import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar"; // Siguraduhing tama ang import path
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap"; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://react-ecommerce-api-zpw8.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const featuredProducts = products.slice(0, 6); // Kumuha ng 6 products para sa grid

  return (
    <div className="lux-home fade-in">
      
      {/* 1. HERO CAROUSEL - Hiwalay sa container para maging edge-to-edge full width */}
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

      {/* 2. MAIN CONTENT AREA - Dito na papasok ang Sidebar at Products */}
      <div className="container mt-5 pt-4">
        <div className="row">
          
          {/* SIDEBAR - 3 Columns sa desktop */}
          <aside className="col-md-3 mb-5">
            <Sidebar />
          </aside>

          {/* PRODUCT LIST - 9 Columns sa desktop */}
          <main className="col-md-9">
            <div className="text-center mb-5">
              <p className="small text-uppercase mb-2" style={{ letterSpacing: '3px', opacity: 0.6 }}>
                The Selection
              </p>
              <h2 className="display-6 mb-4" style={{ fontFamily: "var(--serif)" }}>
                Best Mini Figurines
              </h2>
              <p className="mx-auto fw-light" style={{ maxWidth: '600px', fontSize: '1rem', opacity: 0.7 }}>
                Curated arrivals for those who appreciate designer designer art toys.
              </p>
            </div>

            {/* THE PRODUCT GRID */}
            <div className="row g-3 g-md-4">
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <div key={product.id} className="col-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="small text-uppercase" style={{ letterSpacing: '2px', opacity: 0.5 }}>
                    Loading Collection...
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