function submitform(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    

    if (username === 'admin' && password === 'pogiako123') {
         window.location.href = "dashboard.html";
    } else {
        alert("Wrong username or password");
    }
}
