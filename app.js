document.getElementById("BotonContacto").addEventListener("click", BlurOn)

document.getElementById("icon-close").addEventListener("click", BlurOff);

var blurR = document.getElementById("Difuminado");


function BlurOn() {
          blurR.classList.add("Difuminado");
}

function BlurOff() {
          blurR.classList.remove("Difuminado");
}

document.getElementById("botonCancel").addEventListener("click", () => {
          let formularioContacto = document.getElementById("FormularioContacto");

          formularioContacto.reset();
})

document.getElementById("toggle").addEventListener("click", () => {
          let body = document.getElementById("body");
          let logo1 = document.getElementById("logo1")
          let logo2 = document.getElementById("logo2")
          let toggle = document.getElementById("toggle");
          let HTML = document.getElementById("HTML");

          if (toggle.className == "bx bxs-moon") {
                    toggle.className = "bx bxs-sun"
                    body.className = "body2"
                    logo1.className = "logo1"
                    logo2.className = "logo2"
                    HTML.className = "html2"
          }
          else {
                    body.className = "body1"
                    toggle.className = "bx bxs-moon"
                    logo1.className = "logo2"
                    HTML.className = "html1"
                    logo2.className = "logo1"
          }
})