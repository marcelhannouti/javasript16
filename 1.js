

const id = document.getElementById('id')
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

boton2.onclick = function(){
    id.classList.toggle("rojo")
}
boton1.onclick = function(){
    id.classList.toggle("azul")
}
