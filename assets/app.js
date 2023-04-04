var wrapper = document.querySelector(".wrapper");

document.getElementById("BotonContacto").addEventListener("click", BlurOn)

document.getElementById("icon-close").addEventListener("click", BlurOff);

var blurR = document.getElementById("Difuminado");


function BlurOn() {
          blurR.classList.add("Difuminado");
}

function BlurOff() {
          blurR.classList.remove("Difuminado");
}