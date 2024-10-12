document.addEventListener("DOMContentLoaded", (event) => {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animate elements on scroll
  const animatedElements = document.querySelectorAll(".animated");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  animatedElements.forEach((el) => observer.observe(el));

  // Dark mode toggle
  const darkModeToggle = document.createElement("button");
  darkModeToggle.innerText = "🌓";
  darkModeToggle.classList.add("dark-mode-toggle");
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Add a simple accordion for course list in aside
  const courseList = document.querySelector("aside ul");
  const seeMoreLink = document.querySelector("aside p a");

  courseList.style.maxHeight = "200px";
  courseList.style.overflow = "hidden";
  courseList.style.transition = "max-height 0.3s ease-out";

  seeMoreLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (courseList.style.maxHeight !== "none") {
      courseList.style.maxHeight = "none";
      seeMoreLink.textContent = "See less";
    } else {
      courseList.style.maxHeight = "200px";
      seeMoreLink.textContent = "See more";
    }
  });

  // Add parallax effect
  window.addEventListener("scroll", () => {
    const parallax = document.querySelector(".parallax");
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });
});
