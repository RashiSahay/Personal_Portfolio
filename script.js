document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-bg");
  const contentSections = document.querySelectorAll(".content-section");

  // Fade-in the hero background image when the page loads
  setTimeout(() => {
      heroSection.classList.add("fade-in-bg");
  }, 200); // Delay for the fade-in effect

  // Scroll effect for content sections
  window.addEventListener("scroll", function () {
      contentSections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          // Add the 'visible' class when the section is in view
          if (sectionTop < windowHeight - 100) {
              section.classList.add("visible");
          } else {
              section.classList.remove("visible"); // Remove the class if scrolled back up
          }
      });
  });
});
