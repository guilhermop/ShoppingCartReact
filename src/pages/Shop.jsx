import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar produtos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <p style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", letterSpacing: "2px" }}>
      // LOADING PRODUCTS...
    </p>
  );

  if (error) return (
    <p style={{ color: "var(--accent-pink)" }}>ERROR: {error}</p>
  );

  return (
    <div>
      <h2 style={{ color: "var(--accent-cyan)", letterSpacing: "4px", marginBottom: "2rem" }}>
        // PRODUCTS
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "1.5rem",
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;