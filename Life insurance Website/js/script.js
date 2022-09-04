let menu = document.getElementById("cross")
let menu2 = document.querySelectorAll(".dropst h2")

function come(){
    document.querySelector(".tabs").style="left:-200px;"
    menu.classList.remove("fa-bars")
    menu.classList.add("c")
    document.querySelector(".a").classList.remove("c")
    document.querySelector(".a").classList.add("fa-times")
}
function go(){
    document.querySelector(".tabs").style="left:200rem;"
    menu.classList.add("fa-bars")
    menu.classList.remove("c")
    document.querySelector(".a").classList.add("c")
    document.querySelector(".a").classList.remove("fa-times")
}


function navi() {
    document.querySelector(".h").style="position:fixed;"
}
window.onscroll(navi())