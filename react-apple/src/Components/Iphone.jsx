import React, { useEffect, useState } from "react";

function Iphone() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  

  return (
    <div>
      <h2>iPhones From MySQL  db</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((p) => (
          <div
            key={p.product_id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              width: "260px",
              borderRadius: "8px",
            }}
          >
            {/* Image */}
            {p.product_img && (
              <img
                src={p.product_img}
                alt={p.product_name}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "6px",
                }}
              />
            )}

            {/* Name */}
            <h3>{p.product_name}</h3>

            {/* Brief Description */}
            {p.product_brief_description && (
              <p>{p.product_brief_description}</p>
            )}

            {/* Price Information */}
            {p.starting_price && (
              <p>
                <strong>{p.starting_price}</strong>
              </p>
            )}
            {p.price_range && <p>{p.price_range}</p>}

            {/* Product Link */}
            {p.product_link && (
              <a
                href={p.product_link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue" }}
              >
                View Product
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Iphone;
