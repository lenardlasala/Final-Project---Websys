function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;   
    var role = document.getElementById("role").value;

    if (username === "admin" || email === "admin@roomgrid.com" || password === "pogiako123" || role === "Admin") {
       alert("You have made an Account!");
    } else {
        alert("Please fill in all fields correctly.");
    }
}