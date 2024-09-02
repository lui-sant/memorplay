//variables globales
let nombreJugador = d.querySelector(".jugador");
let listaJugadores = "jugadores";



//funcion para obtener los datos
function obtenerDatos(){
    //crear objeto ´para los datos del jugador
    let datosJugador = {
        "nombre" : nombreJugador.textContent,
        "intentos" : totalIntentos,
        "tiempototal" : totalTiempo,
        "tiemposobrante" :tiempoSobrante
    } 
    //mostrar datos en consola
    console.log(datosJugador);
    //pasar losdatos del jugador
    guardarDatos(datosJugador);
}

// funcion para guardar los datos en localstorage
function guardarDatos(datos){
    // array de para los datos antiguos nuevo
    let jugadores =[];
    //tomar los datos en localstorage previamente guardados
    let datoPrevios = JSON.parse (localStorage.getItem(listaJugadores));
    if(datoPrevios != null){
        jugadores = datoPrevios;
    }
    //guardar el nuevo jugador en el array
    jugadores.push(datos);
    //guarda todos los datos en localstorage
    localStorage.setItem(listaJugadores,  JSON.stringify(jugadores));

}

function mostrarDatos(){
    
    let jugadores =[];
    //tomar los datos en localstorage previamente guardados
    let datoPrevios = JSON.parse (localStorage.getItem(listaJugadores));
    if(datoPrevios != null){
        jugadores = datoPrevios;
    }

    //organizar los jugadores
    jugadores.sort((a,b)=>{
        if(a.tiempototal < b.tiempototal){
            return -1;

        }
        if(a.intentos < b.intentos){
            return 1;
        }
        

    })

    //mostrar los datos de la tabla
    jugadores.forEach((jugador,i) => {
        //crearc fila
        let fila = d.createElement("tr");
        fila.innerHTML = `
          <td> ${i+1} </td>
          <td> ${jugador.nombre} </td>
          <td> ${jugador.tiempototal} </td>
          <td> ${jugador.intentos} </td>
          <td> ${jugador.tiemposobrante} </td>
        `;
        tabla.appendChild(fila);
       
      
    
        
    });
} //video 10 minuto 37:45