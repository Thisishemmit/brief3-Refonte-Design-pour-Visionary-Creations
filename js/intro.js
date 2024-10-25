let show_button= document.getElementById("show_button")
let hide_button =  document.getElementById("hide_button")
show_button.addEventListener("click", display_none)
hide_button.addEventListener("click", display_none)
function display_none(){
    let vid = document.getElementById("video");
    vid.classList.toggle("hidden")
    vid.classList.toggle("flex")
}

