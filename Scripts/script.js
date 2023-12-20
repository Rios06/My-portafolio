//FUNCION PARA QUE CUANDO SELECCIONES UNA PARTE DEL MENU SE QUITEN LAS OTRAS
function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";


    //Se desaparece el menu despues de que seleccionen una opcion pero en el modo responsive

    let x= document.getElementById("nav");
    x.className = "";

}


//FUNCION MENU responsive

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

