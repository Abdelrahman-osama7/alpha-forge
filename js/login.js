
let username = document.getElementById('username')
let password = document.getElementById('password')
let loginBtn = document.getElementById('sign-In')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (username.value == "" || password.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields!",
        });
    } else {
        if (localStorage.getItem("username") == username.value.trim() && localStorage.getItem("password") == password.value) {

            Swal.fire({
                icon: "success",
                title: "Login Successfully!",
                showConfirmButton: false,
                timer: 1500
            });

            setTimeout(() => {
                window.location = "index.html"
            }, 1500)

        } else {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Username or password is wrong!",
            });
        }
    }
})