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
      .catch((error) => console.error("Error:", error));
  }, []);

  const featuredProducts = products.slice(0, 8); 

  return (
    <div className="lux-home fade-in">
      
      {/* HEADER CAROUSEL - SCALES TO PHONE SIZE */}
      <section className="hero-viewport">
        <Carousel fade indicators={true} controls={true} interval={5000}>
          <Carousel.Item className="hero-item">
            <img className="hero-img" src="/Banner1.webp" alt="Banner 1" />
          </Carousel.Item>
          <Carousel.Item className="hero-item">
            <img className="hero-img" src="/Banner2.webp" alt="Banner 2" />
          </Carousel.Item>
          <Carousel.Item className="hero-item">
            <img className="hero-img" src="/Banner3.webp" alt="Banner 3" />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* CONTENT GRID */}
      <div className="container mt-4 mt-md-5">
        <div className="text-center mb-4 mb-md-5">
          <p className="small text-uppercase mb-2" style={{ letterSpacing: '3px', opacity: 0.6 }}>The Selection</p>
          <h2 className="display-6 mb-3" style={{ fontFamily: "var(--serif)" }}>Best Mini Figurines</h2>
        </div>

        {/* 2 columns on phone, 4 on desktop */}
        <div className="row g-2 g-md-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center my-5">
          <Link to="/products" className="btn-lux text-decoration-none">View All Collections</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;