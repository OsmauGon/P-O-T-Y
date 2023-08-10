const contadores = document.querySelector(".contador");
const contenedores = document.querySelectorAll(".contenedorcito");


function añadirContadores(){
    let nuevaCaja = document.createElement("DIV");
    let nuevoNumero = document.createElement("H2");
    nuevaCaja.classList.add("contenedorcito");
    nuevoNumero.classList.add("numero");
    nuevoNumero.innerHTML = 8000;
    nuevaCaja.appendChild(nuevoNumero);
    contadores.appendChild(nuevaCaja)

}
function verificar(){
    alert("Funciona")
}

const boton = document.querySelectorAll(".boton");
const mas = boton[9];
mas.addEventListener("click", ()=> añadirContadores());
contenedores.addEventListener("click", ()=> verificar());