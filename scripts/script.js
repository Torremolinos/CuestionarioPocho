document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("boton1");
    const btn2 = document.getElementById("boton2");
    const btn3 = document.getElementById("boton3");
    const btn4 = document.getElementById("boton4");
    const btn5 = document.getElementById("boton5");
    const btn6 = document.getElementById("boton6");
    const btn7 = document.getElementById("boton7");
    const btn8 = document.getElementById("boton8");
    const btn9 = document.getElementById("boton9");
    const btn10 = document.getElementById("boton10");
  
    const botones = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10];
  
    const validador = () => {
      for (let i = 0; i < botones.length; i++) {
        if (botones[i].textContent === "Verdadero") {
          botones[i].classList.add("verde");
        } else {
          botones[i].classList.add("rojo");
        }
      }
    };
  
    for (let i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", validador);
    }
  });
  