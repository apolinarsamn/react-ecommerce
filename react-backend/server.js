// Import required packages
const express = require("express");
const path = require("path");
const cors = require("cors");

// Import product data from the data folder
const products = require("./data/products");

// Create an Express application
const app = express();

// FIX: Dynamic CORS
// Payagan ang localhost para sa testing at ang iyong Vercel URL para sa production
const allowedOrigins = [
    "http://localhost:5173", // Default Vite port
    "https://react-ecommerce.vercel.app" // Palitan ito ng actual Vercel URL mo
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));

// Middleware to allow JSON request bodies
app.use(express.json());

/* FIX: Serve Static Images
    Sa Render, siguraduhin na ang 'public/images' folder ay kasama sa iyong GitHub push.
*/
app.use("/images", express.static(path.join(__dirname, "public", "images")));

/* API Endpoint: GET /api/products */
app.get("/api/products", (req, res) => {
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

// FIX: PORT for Deployment
// Gagamitin ang process.env.PORT na binibigay ng Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
    // Helpful log to verify your pathing
    console.log("Static images being served from:", path.join(__dirname, "public", "images"));
});