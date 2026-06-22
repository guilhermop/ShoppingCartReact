import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      backgroundColor: "var(--bg-secondary)",
      borderBottom: "1px solid var(--accent-cyan)",
      boxShadow: "0 0 12px #00f5ff44",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <Link to="/" style={{ fontSize: "1.4rem", letterSpacing: "4px", color: "var(--accent-cyan)" }}>
        ⬡ MYSHOP
      </Link>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link to="/shop" style={{ letterSpacing: "2px", fontSize: "0.9rem" }}>
          [ SHOP ]
        </Link>
        <Link to="/cart" style={{
          letterSpacing: "2px",
          fontSize: "0.9rem",
          color: totalItems > 0 ? "var(--accent-pink)" : "var(--accent-cyan)",
          textShadow: totalItems > 0 ? "var(--glow-pink)" : "none",
        }}>
          [ CART{totalItems > 0 ? ` +${totalItems}` : "" } ]
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;