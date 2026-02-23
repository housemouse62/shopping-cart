import { Link } from "react-router";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#2c3e50" }}>
        A Little Bit of This. A Little Bit of That.
      </h1>
      <p
        style={{
          fontSize: "1.3rem",
          color: "#666",
          marginBottom: "3rem",
          maxWidth: "600px",
          margin: "0 auto 3rem",
        }}
      >
        Your one-stop shop for beauty, fragrances, furniture, and groceries.
        Everything you need, all in one place.
      </p>
      <Link
        to="/shop"
        style={{
          display: "inline-block",
          backgroundColor: "#3498db",
          color: "white",
          padding: "1rem 3rem",
          fontSize: "1.2rem",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "background-color 0.2s",
        }}
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default Home;
