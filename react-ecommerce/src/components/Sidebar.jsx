import React, { useState, useEffect } from "react";

const Sidebar = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // API Fetch for Categories - UPDATED URL to your Render backend
    fetch("https://react-ecommerce-api-zpw8.onrender.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        // Siguraduhin na 'all' ang laging una
        setCategories(["all", ...data]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        // Fallback categories kung offline ang API (Updated to match your actual data case)
        setCategories(["all", "Figurines", "Accessories", "Limited"]); 
      });
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Siguraduhin na 'all' ay lowercase para sa logic, pero ang iba ay ipasa as is
    onSelectCategory(category); 
  };

  return (
    <aside className="sidebar-lux py-2 pe-3">
      {/* Editorial Title */}
      <p className="text-muted small text-uppercase mb-4 fw-bold" style={{ letterSpacing: '2px', fontSize: '0.7rem' }}>
        Browse by Category
      </p>
      
      <div className="category-list d-flex flex-column text-start gap-3">
        {categories.map((category, index) => (
          <span 
            key={index} 
            className={`text-capitalize transition-all fw-light`}
            onClick={() => handleCategoryClick(category)}
            style={{ 
              cursor: 'pointer',
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
              // Dark Mode compatibility logic
              color: activeCategory === category ? 'var(--lux-black)' : '#888',
              fontWeight: activeCategory === category ? '700' : '300',
              borderLeft: activeCategory === category ? '2px solid var(--lux-black)' : '2px solid transparent',
              paddingLeft: '12px',
              transition: 'all 0.3s ease'
            }}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Seasonal Promo Box */}
      <div className="mt-5 pt-5 border-top d-none d-lg-block">
        <div className="p-4 bg-transparent border text-center">
          <p className="text-uppercase mb-1 fw-bold" style={{ fontSize: '0.65rem', letterSpacing: '2px' }}>
            New Season
          </p>
          <p className="small text-muted mb-3 fw-light">Arrivals 2026</p>
          <button 
            className="btn-lux w-100 py-2" 
            style={{ fontSize: '0.6rem', padding: '10px' }}
          >
            VIEW LOOKBOOK
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;