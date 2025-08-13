//creación array (lista)
let amigos = [];

//función agregar amigos
function agregarAmigo(){ //determino el elemento de interés por su Id
    const inputAmigo = document.getElementById("amigo");
    //creo la variable nombre para tomar el valor del input
    let nombre = inputAmigo.value.trim(); //agrego el trim para evitar espacios
    //si la variable nombre está vacia, que figure el alert
   if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        // si el nombre se repite, indicar alert
    } else if (amigos.includes(nombre)) {
        alert(`El nombre "${nombre}" ya está en la lista.`);
        // de lo contrario, ingresar al array
    } else {
        amigos.push(nombre);
        mostrarAmigos();
    }
    inputAmigo.value = ""; // limpiar caja SIEMPRE
}


//función mostrar amigos en la lista
function mostrarAmigos() { //obtener el elemento donde mostraremos la lista
    const lista = document.getElementById("listaAmigos");
    //limpiar lista para no duplicar
    lista.innerHTML = "";
    //recorrer el array y renderiza lista
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

//función sortear amigos
function sortearAmigo(){
    //comprobar que el array no esté vacio
        if(amigos.length ===0){
        alert ("No hay amigos en la lista para mostrar");
       return;
    } //utilizar el índice aleatorio math.random para acceder al nombre
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    //mostrar el resultado
    let resultadoSorteo = document.getElementById ("resultado")
    resultadoSorteo.innerHTML =`El amigo sorteado es ${amigoSorteado}`
}