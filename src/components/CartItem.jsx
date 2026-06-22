import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart();
  const { product, quantity } = item;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "80px 1fr auto",
      gap: "1rem",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "0.4rem",
        borderRadius: "2px",
      }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "60px", objectFit: "contain" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--text-primary)", lineHeight: "1.3" }}>
          {product.title}
        </p>
        <p style={{ color: "var(--accent-cyan)", fontSize: "0.9rem", letterSpacing: "1px" }}>
          $ {(product.price * quantity).toFixed(2)}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            style={{
              width: "28px", height: "28px",
              backgroundColor: "transparent",
              border: "1px solid var(--border)",
              color: "var(--accent-cyan)",
              fontSize: "1rem",
            }}
          >−</button>
          <span style={{ minWidth: "20px", textAlign: "center", fontSize: "0.9rem" }}>
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            style={{
              width: "28px", height: "28px",
              backgroundColor: "transparent",
              border: "1px solid var(--border)",
              color: "var(--accent-cyan)",
              fontSize: "1rem",
            }}
          >+</button>
        </div>
        <button
          onClick={() => removeItem(product.id)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "var(--accent-pink)",
            fontSize: "0.75rem",
            letterSpacing: "1px",
          }}
        >
          [ REMOVE ]
        </button>
      </div>
    </div>
  );
}

export default CartItem;