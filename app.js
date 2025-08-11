//creación array (lista)
let amigos = [];

//función agregar amigos
function agregarAmigo(){ //determino el elemento de interés por su Id
    const inputAmigo = document.getElementById("amigo");
    //creo la variable nombre para tomar el valor del input
    let nombre = inputAmigo.value.trim(); //agrego el trim para evitar espacios
    //si la variable nombre está vacia, que figure el alert
    if(nombre===""){
        alert ("Por favor, inserte un nombre");
    } else { //de lo contrario, que se sume al array
        amigos.push(nombre);
        mostrarAmigos(); //llamé a la función de mostrar amigos 
    }// para que se limpie y seguir sumando nombres
    inputAmigo.value ="";
}

//función mostrar Amigos
function mostrarAmigos(){
    // obtener el elemento donde mostraremos la lista
    const lista = document.getElementById ("listaAmigos");
    // limpiar lista para no duplicar
    lista.innerHTML ="";
    // recorrer el array
    for (let i = 0; i<amigos.length; i++) {
        //agregar amigo
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
} //AGREGAR QUE SI SE REPITE UN NOMBRE, NO LO TOME