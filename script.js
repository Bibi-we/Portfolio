// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio is ready!");

  // 1️⃣ Smooth scroll for navbar links (just in case older browsers don’t handle CSS smooth scroll well)
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1); // remove #
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});