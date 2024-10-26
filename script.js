
let lastScrollTop = 0;
const navbar = document.getElementById("section-navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScrollTop) {
        // Scroll Down - Hide Navbar with fluid movement
        navbar.style.transform = "translateY(-100px)"; // Adjust this based on navbar height
    } else {
        // Scroll Up - Show Navbar with fluid movement
        navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
