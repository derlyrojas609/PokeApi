//Buscar dato del pokemon dependiendo de su numero o nombre
function buscarPokemon(contenedorNumero){
    let inputId = `pokemonInput${contenedorNumero}`;
    let nombrePokemon = document.getElementById(inputId).value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`


    fetch(urlApi)
    .then(Response => Response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, contenedorNumero))
    .catch(() => mostrarError(contenedorNumero))

}

//Mostrar información del Pokemón

function mostrarPokemon(datosPokemon, contenedorNumero){
    let infoDiviD = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDiviD);

    infoDiv.innerHTML = `
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p><strong>Número:</strong> ${datosPokemon.id}</p>
    <p><strong>weight:</strong> ${datosPokemon.weight/10}Kg</p>
    <p><strong>height:</strong> ${datosPokemon.height/10}m</p>    
    `
}

//Error en busqueda de Pokemon

function mostrarError(contenedorNumero){
    let infoDiviD = `pokemonInfo${contenedorNumero}`;
    let infoDiv = document.getElementById(infoDiviD);
    infoDiv.innerHTML = `
    <p class="pk-ms">Pokemón no encontrado. <br> Intenta con otro nombre o número</p>    
    `
}

//Mostrar pokemon Inicial

window.onload = function(){
    document.getElementById("pokemonInput1").value = "25";
    buscarPokemon(1);
    document.getElementById("pokemonInput2").value = "4";
    buscarPokemon(2);
}


