export default function DisclaimerPage() {
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
        Disclaimer
      </h1>

      <p>
        MEPCO Bill Portal is an independent informational website created to help
        users access useful guidance related to MEPCO online bill checking.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        No Official Affiliation
      </h2>
      <p>
        This website is not officially affiliated with, authorized by, or endorsed by 
        MEPCO, PITC, WAPDA, or any government department. All names, trademarks, logos, 
        and references belong exclusively to their respective owners.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Limitation of Liability
      </h2>
      <p>
        The information provided on this platform is intended solely for general guidance. 
        Please review our detailed terms regarding data usage:
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        Information Accuracy
      </h3>
      <p>
        While we try to keep all material accurate and updated, we do not guarantee 
        or warrant that any content, calculator tool, or data provided here will always 
        be complete, current, or entirely error-free.
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        External Links & Redirections
      </h3>
      <p>
        Our website may redirect users to official portal endpoints or third-party web 
        assets for bill downloading or extra resource retrieval. We hold zero control 
        or responsibility over the content, availability, security, or policies of 
        these external domains.
      </p>

      <h3 style={{ fontSize: "22px", marginTop: "20px", marginBottom: "10px" }}>
        User Responsibility
      </h3>
      <p>
        Electricity consumers are highly encouraged to verify critical billing balances 
        and payment details directly against official physical slips or designated state utilities 
        prior to settling dues or making financial decisions.
      </p>

      <h2 style={{ fontSize: "28px", marginTop: "30px", marginBottom: "15px" }}>
        Contact & Corrections
      </h2>
      <p>
        If you spot any outdated figures or incorrect data, please reach out via our 
        contact channel so our maintenance team can verify and adjust the page promptly.
      </p>

      <p style={{ marginTop: "40px", opacity: 0.7 }}>
        Last Updated: 2026
      </p>
    </main>
  );
}