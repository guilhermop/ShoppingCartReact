import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "6rem" }}>
      <p style={{ color: "var(--accent-purple)", letterSpacing: "6px", fontSize: "0.85rem", marginBottom: "1rem" }}>
        // WELCOME TO THE GRID
      </p>
      <h1 style={{
        fontSize: "3.5rem",
        letterSpacing: "8px",
        color: "var(--accent-cyan)",
        textShadow: "0 0 20px #00f5ff66",
        marginBottom: "1rem",
      }}>
        MYSHOP
      </h1>
      <p style={{
        color: "var(--text-secondary)",
        fontSize: "0.9rem",
        letterSpacing: "2px",
        marginBottom: "3rem",
      }}>
        premium goods from the neon 
      </p>
      <Link to="/shop">
        <button style={{
          padding: "1rem 3rem",
          backgroundColor: "transparent",
          border: "1px solid var(--accent-cyan)",
          color: "var(--accent-cyan)",
          fontSize: "0.9rem",
          letterSpacing: "4px",
          fontFamily: "Orbitron, sans-serif",
          cursor: "pointer",
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
          [ ENTER SHOP ]
        </button>
      </Link>
    </div>
  );
}

export default Home;