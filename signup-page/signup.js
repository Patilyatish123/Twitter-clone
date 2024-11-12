function saveData(){
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   let confirmPassword = document.getElementById("confirm-password").value;

   if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return false;
}
else if(password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
}
else if (localStorage.getItem(email) !== null){
    alert("User already exist");
    
    return false;
}
else{
const user = {
    name:name,
    email:email,
    password:password,
    confirmPassword:confirmPassword
}
localStorage.setItem(email,JSON.stringify(user))
   alert("signup succesfully!");
}
}
function mainPage(){
    window.location.href="../index.html"
}
function loginPage(){
    window.location.href="../login-page/login.html"
}