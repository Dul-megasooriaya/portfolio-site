// Wait until the full page loads
document.addEventListener("DOMContentLoaded", function () {
    // Get form and response paragraph
    const form = document.getElementById("contactForm");
    const response = document.getElementById("formResponse");
  
    // Add event listener for form submit
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent real submission
  
      // Display confirmation message
      response.textContent = "Thank you! Your message has been submitted.";
  
      // Optional: clear form fields
      form.reset();
    });
  });
  