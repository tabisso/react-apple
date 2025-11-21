const express = require("express");
const cors = require("cors");
// const pool = require("./DB"); 
import  pool  from "./DB";  
require("dotenv").config();

const app = express();
app.use(cors()); 

app.use(express.json());



// feching products 
app.get("/api/products", async (req, res) => {
  try {
    const sql = `
      SELECT 
        p.product_id,
        p.product_url,
        p.product_name,

        d.description_id,
        d.product_brief_description,
        d.product_description,
        d.product_img,
        d.product_link,

        pr.price_id,
        pr.starting_price,
        pr.price_range
      FROM products p
      LEFT JOIN productDescription d ON p.product_id = d.product_id
      LEFT JOIN productPrice pr ON p.product_id = pr.product_id
    `;

    const [rows] = await pool.query(sql);
    res.json(rows); 
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Database error" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
