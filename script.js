// Select hamburger icon
const menuIcon = document.getElementById("menuIcon");

// Select navigation links
const navLinks = document.getElementById("navLinks");

//
// When hamburger is clicked
menuIcon.addEventListener("click", function () {
    // Toggle 'active' class
    navLinks.classList.toggle("active");
});