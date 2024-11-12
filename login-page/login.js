function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve the user object from localStorage
    const storedUser = localStorage.getItem(email);
    
    if (storedUser) {
        // Parse the stored user data
        const user = JSON.parse(storedUser);

        // Check if the password matches
        if (password === user.password) {
            alert("Login successfully!");
            window.location.href = "../index.html";
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            return false;
        } else {
            alert("Incorrect password. Please try again.");
            return false;
        }
    } else {
        alert("User does not exist. Please sign up first.");
        return false;
    }
}
function mainPage(){
    window.location.href="../index.html"
}
function signupPage(){
    window.location.href="../signup-page/signup.html"
}