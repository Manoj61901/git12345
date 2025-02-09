// Keywords to search for
const keywords = [
    "personal data",
    "user information",
    "privacy policy",
    "data sharing",
    "cookies",
    "third-party",
    "GDPR",
    "CCPA",
    "PII",
    "personally identifiable information"
  ];
  
  // Function to highlight keywords
  function highlightKeywords() {
    const bodyText = document.body.innerText;
    let found = false;
  
    keywords.forEach((keyword) => {
      if (bodyText.toLowerCase().includes(keyword.toLowerCase())) {
        found = true;
      }
    });
  
    if (found) {
      // Create a warning banner
      const banner = document.createElement("div");
      banner.id = "policy-checker-banner";
      banner.textContent = "⚠️ This page may contain user information or personal data sharing terms.";
      document.body.appendChild(banner);
    }
  }
  
  // Run the function when the page loads
  highlightKeywords();