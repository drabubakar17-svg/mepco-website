export default function AboutUsPage() {
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
        About Us
      </h1>

      <p>
        MEPCO Bill Portal is an independent informational website created to help
        users quickly access MEPCO online bill checking information.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Our Purpose
      </h2>
      <p>
        Our goal is to provide a simple, fast, and mobile-friendly experience for
        users who want to check duplicate MEPCO electricity bills, understand
        reference numbers, estimate bills, and learn useful electricity saving tips.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Important Notice
      </h2>
      <p>
        This website is not officially affiliated with MEPCO, PITC, WAPDA, or any
        government department. We provide informational guidance and redirect users
        to the official bill checking source when required.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        What We Provide
      </h2>
      <p>
        We offer a comprehensive set of free resources and tools to make managing your 
        electricity information as straightforward as possible:
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        Bill Checking & Guidance
      </h3>
      <p>
        Step-by-step guidance on how to fetch, view, and print your duplicate bills, 
        along with detailed explanations of consumer reference numbers.
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        Calculators & Peak Hours
      </h3>
      <p>
        An estimated bill calculator to help you project monthly costs, alongside up-to-date 
        information on daily peak hours to help reduce your electricity consumption.
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        Coverage & Support
      </h3>
      <p>
        Detailed city coverage information across the MEPCO region, alongside answering frequently 
        asked consumer questions (FAQs).
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Contact
      </h2>
      <p>
        For questions, suggestions, or correction requests, users can contact us
        through our contact page.
      </p>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Last Updated: 2026
      </p>
    </main>
  );
}