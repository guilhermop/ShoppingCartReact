import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { items, totalItems } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <p style={{ color: "var(--accent-cyan)", letterSpacing: "4px", fontSize: "1.2rem" }}>
        // CART IS EMPTY
      </p>
      <p style={{ color: "var(--text-secondary)", marginTop: "1rem", fontSize: "0.85rem" }}>
        no items in queue
      </p>
    </div>
  );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "var(--accent-cyan)", letterSpacing: "4px", marginBottom: "2rem" }}>
        // CART ({totalItems} items)
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>

      <div style={{
        marginTop: "2rem",
        padding: "1.5rem",
        border: "1px solid var(--border)",
        backgroundColor: "var(--bg-card)",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
          fontSize: "0.9rem",
          color: "var(--text-secondary)",
        }}>
          <span>TOTAL ITEMS</span>
          <span>{totalItems}</span>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
          color: "var(--accent-cyan)",
          fontSize: "1.3rem",
          letterSpacing: "2px",
        }}>
          <span>TOTAL</span>
          <span>$ {total.toFixed(2)}</span>
        </div>
        <button style={{
          width: "100%",
          padding: "0.9rem",
          backgroundColor: "var(--accent-cyan)",
          color: "var(--bg-primary)",
          border: "none",
          letterSpacing: "4px",
          fontSize: "0.9rem",
          fontFamily: "Orbitron, sans-serif",
        }}>
          [ CHECKOUT ]
        </button>
      </div>
    </div>
  );
}

export default Cart;