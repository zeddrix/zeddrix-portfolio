const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

window.addEventListener("click", (event) => {
  if (event.target.matches(".toggle-button")) {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
});

// toggleButton.addEventListener("click", () => {
//   mobileNav.classList.add("open");
// });
