export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "90px",
            marginBottom: "10px",
            color: "#15803d",
            fontWeight: "bold",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "32px",
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          Page Not Found
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 30px auto",
            color: "#4b5563",
            lineHeight: "1.8",
          }}
        >
          The page you are looking for does not exist, may have been moved, or is temporarily 
          unavailable. Please use the navigation below to get back on track.
        </p>

        <h3
          style={{
            fontSize: "22px",
            marginTop: "20px",
            marginBottom: "15px",
            color: "#111827",
            fontWeight: "600",
          }}
        >
          Navigation Options
        </h3>

        <a
          href="/"
          style={{
            display: "inline-block",
            background: "#15803d",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background 0.2s ease",
          }}
        >
          Back To Homepage
        </a>
      </div>
    </main>
  );
}