document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "✓ Thank you! We’ll get back to you soon.";

    this.reset();

});