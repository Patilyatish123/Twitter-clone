
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
function login(){
    window.location.href = "/login-page/login.html";
}

window.onload = function() {
    // get the data from local storage
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        
        const user = JSON.parse(loggedInUser);

        // Display the user's name and email (username)
        document.getElementById('display-name').textContent = user.name; 
        document.getElementById('user-name').textContent = "@" + user.email; 
    } else {
        // If no user is logged in, show a default user as guest
        document.getElementById('display-name').textContent = 'Guest';
        document.getElementById('user-name').textContent = '@Guest@gmail.com';
    }
}



    



