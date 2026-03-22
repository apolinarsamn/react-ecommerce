const express = require("express");
const path = require("path");
const cors = require("cors");
const products = require("./data/products");

const app = express();

// FIX: Mas simple at mas siguradong gagana sa deployment
app.use(cors()); 

app.use(express.json());

// Siguraduhin na ang folder structure mo ay: react-backend/public/images
app.use("/images", express.static(path.join(__dirname, "public", "images")));

/* API Endpoint: GET /api/products */
app.get("/api/products", (req, res) => {
    // Helpful log para makita sa Render dashboard kung may tumatawag sa API
    console.log("Fetching products...");
    res.json(products); 
});

/* Root Route */
app.get("/", (req, res) => {
    res.send("E-Commerce Product API is running...");
});

/* API Endpoint: GET /api/categories */
app.get("/api/categories", (req, res) => {
    const allCategories = products.map(product => product.category);
    const uniqueCategories = [...new Set(allCategories)];
    res.json(uniqueCategories);
});

// Port handling para sa Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});