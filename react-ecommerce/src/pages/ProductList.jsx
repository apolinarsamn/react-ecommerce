import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    // FIXED: Corrected the URL typo (removed 'ss') and added the proper endpoint path
    fetch("https://react-ecommerce-api-zpw8.onrender.com/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // We ensure data is an array before mapping to prevent crashes
        const productsArray = Array.isArray(data) ? data : [];
        
        const formatted = productsArray.map(item => ({
          id: item.id || item._id, 
          name: item.name,
          price: Number(item.price),
          category: item.category,
          image: item.image
        }));
        
        setProducts(formatted); 
        setTimeout(() => setLoading(false), 800); 
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  const processedProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || 
        (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortType === "low") return a.price - b.price;
      if (sortType === "high") return b.price - a.price;
      if (sortType === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="container-fluid px-lg-5 mt-5">
      <div className="row g-5">
        
        {/* SIDEBAR SECTION */}
        <aside className="col-lg-2 d-none d-lg-block border-end py-4">
          <p className="text-muted small text-uppercase mb-4" style={{ letterSpacing: '2px' }}>Categories</p>
          <Sidebar onSelectCategory={setSelectedCategory} activeCategory={selectedCategory} />
        </aside>

        {/* MAIN CONTENT SECTION */}
        <main className="col-lg-10 ps-lg-5">
          
          {/* TOP BAR: SEARCH & SORT */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 pb-3 border-bottom">
            <div className="search-box mb-3 mb-md-0" style={{ maxWidth: '300px' }}>
              <input 
                type="text" 
                className="form-control border-0 bg-transparent px-0 rounded-0" 
                placeholder="SEARCH COLLECTION..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ fontSize: '0.85rem', letterSpacing: '1px' }}
              />
            </div>
            
            <div className="d-flex align-items-center">
              <span className="small text-muted me-3">{processedProducts.length} ITEMS</span>
              <select 
                className="form-select border-0 bg-transparent small fw-bold" 
                style={{ width: 'auto', fontSize: '0.75rem', letterSpacing: '1px' }}
                value={sortType} 
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="default">SORT BY</option>
                <option value="low">PRICE: LOW-HIGH</option>
                <option value="high">PRICE: HIGH-LOW</option>
                <option value="name">NAME: A-Z</option>
              </select>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="row g-4">
            {loading ? (
              [1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div className="col-lg-3 col-md-4 col-6 mb-5" key={n}>
                   <div className="skeleton" style={{ height: '350px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}></div>
                </div>
              ))
            ) : processedProducts.length > 0 ? (
              processedProducts.map((product) => (
                <div className="col-lg-3 col-md-4 col-6 mb-5" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="text-center w-100 py-5">
                <p className="text-muted small text-uppercase" style={{ letterSpacing: '2px' }}>No matches found in this collection.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;