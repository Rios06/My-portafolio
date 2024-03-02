
function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";



    let x= document.getElementById("nav");
    x.className = "";

}

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

let numbers = document.querySelectorAll(".porcentaje");
let circles = document.querySelectorAll("circle");

numbers.forEach((number, index) => {
    let contador = 0;
    setInterval(() => {
        if(contador == parseInt(number.textContent)) {
            clearInterval();
        } else {
            contador += 1;
            number.textContent = contador + "%";  
            let porcentaje = (472 * (100 - contador)) / 100;
            circles[index].style.strokeDashoffset = porcentaje;
        }
    }, 30);
});



function escribirNombre(nombre, elemento) {
    let i = 0;
    setInterval(() => {
        if (i < nombre.length) {
            elemento.textContent += nombre[i];
            i++;
        } else {
            i = 0;
            elemento.textContent = ''; 
        }
    }, 150); 
}


document.addEventListener("DOMContentLoaded", function() {
    const nombre = "Jennifer Rios";
    const nombreElemento = document.getElementById('nombre');
    escribirNombre(nombre, nombreElemento);
});


