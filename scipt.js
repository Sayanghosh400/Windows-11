let windows = document.getElementsByClassName("windows")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
windows.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-650px"
    } else {
        startmenu.style.bottom = "50px"
    }
})
let right = document.getElementsByClassName("right")[0]
let ctrlcenter = document.getElementsByClassName("ctrlcenter")[0]
right.addEventListener("click", () => {
    if (ctrlcenter.style.bottom == "50px") {
        ctrlcenter.style.bottom = "-650px"
    } else {
        ctrlcenter.style.bottom = "50px"
    }
})