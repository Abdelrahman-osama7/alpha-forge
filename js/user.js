
let links = document.getElementById("links")
let userdata = document.getElementById("user-info")
let user = document.getElementById("user")

if (localStorage.getItem("username")) {
    if (links) links.remove()
    if (userdata) userdata.style.display = "flex"
    if (user) {
        user.innerHTML = localStorage.getItem("username")
        user.style.textTransform = "capitalize"
    }
}

let logOutBtn = document.getElementById('logout')
if (logOutBtn) {
    logOutBtn.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location = "register.html"
    })
}