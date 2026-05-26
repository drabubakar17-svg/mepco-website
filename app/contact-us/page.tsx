export default function ContactUsPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "#111",
        lineHeight: "1.8",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        Contact Us
      </h1>

      <p>
        If you have any questions, suggestions, correction requests, or feedback
        about MEPCO Bill Portal, please reach out to us using the options below.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Get In Touch
      </h2>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        Email Support
      </h3>
      <p>
        For general inquiries, support, or partnership opportunities, email us at:{" "}
        <a href="mailto:drabubakar17@gmail.com" style={{ color: "#0066cc", textDecoration: "underline" }}>
          drabubakar17@gmail.com
        </a>
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        Response Time
      </h3>
      <p>
        We value your feedback and try to review all incoming user messages and 
        correction requests as soon as possible, typically within 24–48 hours.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Important Notice
      </h2>
      <p>
        Please note that this website is an independent informational utility portal. We 
        are <strong>not</strong> officially affiliated with MEPCO, PITC, WAPDA, or any government 
        department. We cannot resolve billing disputes, address power outages, or modify your 
        official electricity account details.
      </p>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Last Updated: 2026
      </p>
    </main>
  );
}