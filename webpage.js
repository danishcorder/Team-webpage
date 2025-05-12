// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Team Member Filters
const filterButtons = document.querySelectorAll(".filters button");
const teamMembers = document.querySelectorAll(".team-members .member");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.getAttribute("data-role");
    teamMembers.forEach((member) => {
      if (role === "all" || member.getAttribute("data-role") === role) {
        member.style.display = "block";
      } else {
        member.style.display = "none";
      }
    });
  });
});