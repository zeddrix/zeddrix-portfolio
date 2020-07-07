const mobileNav = document.querySelector(".mobile-nav");
const backdrop = document.getElementById("backdrop");

const openMobileNav = () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeMobileNav = () => {
  mobileNav.style.display = "none";
  backdrop.style.display = "none";
  document.body.style.overflow = "auto";
};

window.addEventListener("click", (event) => {
  if (event.target.matches("#toggle-button, .toggle-button__bar")) {
    openMobileNav();
  } else {
    closeMobileNav();
    console.log("You haven't clicked anywhere.");
  }
});

// const toggleButton = document.querySelector(".toggle-button");
// toggleButton.addEventListener("click", () => {
//   mobileNav.classList.add("open");
// });
