
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let registerbtn = document.getElementById('sign-up')

registerbtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (username.value == "" || email.value == "" || password.value == "") {
        Swal.fire({
            position: "canter-end",
            icon: "warning",
            title: "Please fill in all fields",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        Swal.fire({
            position: "canter-end",
            icon: "success",
            title: "Registered Successfully!",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location = "login.html"
        }, 1500)
    }
})

let show = document.getElementById('show')
if (show) {
    show.addEventListener('click', () => {
        password.type = show.checked ? "text" : "password"
    })
}