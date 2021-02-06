const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.getElementById('backdrop');

const openMobileNav = () => {
	mobileNav.style.display = 'block';
	backdrop.style.display = 'block';
	document.body.style.overflow = 'hidden';
};

const closeMobileNav = () => {
	mobileNav.style.display = 'none';
	backdrop.style.display = 'none';
	document.body.style.overflow = 'auto';
};

document.addEventListener('click', (e) => {
	if (e.target.matches('#toggle-button, .toggle-button__bar')) {
		openMobileNav();
	} else if (e.target.matches('#backdrop')) {
		closeMobileNav();
	}
});

// const toggleButton = document.querySelector(".toggle-button");
// toggleButton.addEventListener("click", () => {
//   mobileNav.classList.add("open");
// });
