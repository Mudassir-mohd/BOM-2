// Register Function
function register() {
    let username = document.getElementById("reg-username").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;

    if (username === "" || email === "" || password === "") {
        alert("All fields are required!");
        return;
    }

    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration Successful!");
}

// Login Function
function login() {
    let loginUsername = document.getElementById("login-username").value;
    let loginPassword = document.getElementById("login-password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found. Please register first!");
        return;
    }

    if (loginUsername === storedUser.username && loginPassword === storedUser.password) {
        document.getElementById("message").innerText = "Login Successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerText = "Invalid Credentials!";
        document.getElementById("message").style.color = "red";
    }
}
