const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.getElementById("backdrop");

const openMobileNav = () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
};

const closeMobileNav = () => {
  mobileNav.style.display = "none";
  backdrop.style.display = "none";
};

window.addEventListener("click", (event) => {
  if (event.target.matches(".toggle-button")) {
    openMobileNav();
  } else {
    closeMobileNav();
  }
});

// toggleButton.addEventListener("click", () => {
//   mobileNav.classList.add("open");
// });
