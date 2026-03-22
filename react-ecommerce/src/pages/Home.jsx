import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
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

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="lux-home fade-in">

      {/* ======================= HERO CAROUSEL ======================= */}
      <section className="hero-viewport">
        <Carousel
          id="carouselExampleIndicators"
          fade
          indicators={true}
          controls={true}
          interval={5000}
          pause={false}
        >
          {/* Slide 1 */}
          <Carousel.Item className="hero-item">
            <img
              className="d-block w-100 hero-img"
              src="/Banner1.webp"
              alt="First editorial slide"
            />
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item className="hero-item">
            <img
              className="d-block w-100 hero-img"
              src="/Banner2.webp"
              alt="Second editorial slide"
            />
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item className="hero-item">
            <img
              className="d-block w-100 hero-img"
              src="/Banner3.webp"
              alt="Third editorial slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* EDITORIAL INTRODUCTION */}
      {/* FIX: Ginamit ang 'py-4 py-md-5' para mas maliit ang space sa mobile */}
      <div className="container mt-4 mt-md-5 pt-3 pt-md-5">
        <div className="text-center mb-4 mb-md-5 pb-2 pb-md-4">
          <p className="text-muted small text-uppercase mb-2" style={{ letterSpacing: '3px' }}>
            The Selection
          </p>
          <h2 className="display-5 mb-4" style={{ fontFamily: "var(--serif)" }}>
            Best Mini Figures
          </h2>
          <p className="text-muted mx-auto fw-light px-3 px-md-0" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Discover our latest editorial arrivals, curated for those who appreciate the finer details of designer mini figures.
          </p>
        </div>

        {/* THE PRODUCT GRID */}
        {/* FIX: col-6 sa mobile para magkatabi ang dalawang items (mas mukhang professional) */}
        <div className="row g-3 g-md-5 mb-5">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted small text-uppercase" style={{ letterSpacing: '2px' }}>
                Loading Collection...
              </p>
            </div>
          )}
        </div>

        <div className="text-center mb-5 mt-4">
          <Link to="/products" className="btn-lux text-decoration-none">
            View All Collections
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;