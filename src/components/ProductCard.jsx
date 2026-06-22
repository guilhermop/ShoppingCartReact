import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div style={{
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
      borderRadius: "4px",
      padding: "1.2rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.8rem",
      transition: "border-color 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent-cyan)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
      }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <p style={{ fontSize: "0.75rem", color: "var(--accent-purple)", letterSpacing: "1px" }}>
        {product.category.toUpperCase()}
      </p>

      <h3 style={{
        fontSize: "0.85rem",
        color: "var(--text-primary)",
        lineHeight: "1.4",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {product.title}
      </h3>

      <p style={{ color: "var(--accent-cyan)", fontSize: "1.1rem", letterSpacing: "2px" }}>
        $ {product.price.toFixed(2)}
      </p>

      <button
        onClick={() => addItem(product)}
        style={{
          marginTop: "auto",
          padding: "0.6rem",
          backgroundColor: "transparent",
          border: "1px solid var(--accent-cyan)",
          color: "var(--accent-cyan)",
          letterSpacing: "2px",
          fontSize: "0.8rem",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = "var(--accent-cyan)";
          e.currentTarget.style.color = "var(--bg-primary)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "var(--accent-cyan)";
        }}
      >
        [ ADD TO CART ]
      </button>
    </div>
  );
}

export default ProductCard;