// variables globales
const d = document;
let imgN1 = [
    {nombre:"batman",url:"imagenes/batman.jpg"},
    {nombre: "blade", url:"imagenes/blade.jpg"},
    {nombre: "wolverine", url:"imagenes/wolverine.jpg"},
    {nombre: "cafe1", url:"imagenes/cafe1.jpg"},
    {nombre: "cafe2", url:"imagenes/cafe2.jpg"},
    {nombre: "harley", url:"imagenes/harley.jpg"},
    {nombre:"batman",url:"imagenes/batman.jpg"},
    {nombre: "blade", url:"imagenes/blade.jpg"},
    {nombre: "wolverine", url:"imagenes/wolverine.jpg"},
    {nombre: "cafe1", url:"imagenes/cafe1.jpg"},
    {nombre: "cafe2", url:"imagenes/cafe2.jpg"},
    {nombre: "harley", url:"imagenes/harley.jpg"} 
];
let imgN2 = [
    {nombre:"batman",url:"imagenes/batman.jpg"},
    {nombre: "blade", url:"imagenes/blade.jpg"},
    {nombre: "wolverine", url:"imagenes/wolverine.jpg"},
    {nombre: "cafe1", url:"imagenes/cafe1.jpg"},
    {nombre: "cafe2", url:"imagenes/cafe2.jpg"},
    {nombre: "harley", url:"imagenes/harley.jpg"},
    {nombre:"batman",url:"imagenes/batman.jpg"},
    {nombre: "blade", url:"imagenes/blade.jpg"},
    {nombre: "wolverine", url:"imagenes/wolverine.jpg"},
    {nombre: "cafe1", url:"imagenes/cafe1.jpg"},
    {nombre: "cafe2", url:"imagenes/cafe2.jpg"},
    {nombre: "harley", url:"imagenes/harley.jpg"},
    {nombre: "batimovil",url:"imagenes/batimovil.jpg"}, 
    {nombre: "autoblade",url:"imagenes/autoblade.jpg"}, 
    {nombre: "batimovil",url:"imagenes/batimovil.jpg"}, 
    {nombre: "autoblade",url:"imagenes/autoblade.jpg"} 
  
];
let imgN3 = [
    {nombre:"batman",url:"imagenes/batman.jpg"},
    {nombre: "blade", url:"imagenes/blade.jpg"},
    {nombre: "wolverine", url:"imagenes/wolverine.jpg"},
    {nombre: "cafe1", url:"imagenes/cafe1.jpg"},
    {nombre: "cafe2", url:"imagenes/cafe2.jpg"},
    {nombre: "harley", url:"imagenes/harley.jpg"},
    {nombre:"batman",url:"imagenes/batman.jpg"},
    {nombre: "blade", url:"imagenes/blade.jpg"},
    {nombre: "wolverine", url:"imagenes/wolverine.jpg"},
    {nombre: "cafe1", url:"imagenes/cafe1.jpg"},
    {nombre: "cafe2", url:"imagenes/cafe2.jpg"},
    {nombre: "harley", url:"imagenes/harley.jpg"},
    {nombre: "batimovil",url:"imagenes/batimovil.jpg"}, 
    {nombre: "autoblade",url:"imagenes/autoblade.jpg"}, 
    {nombre: "batimovil",url:"imagenes/batimovil.jpg"}, 
    {nombre: "autoblade",url:"imagenes/autoblade.jpg"},     
    {nombre: "terminator",url:"imagenes/terminator.jpeg"}, 
    {nombre: "venom",url:"imagenes/venom.jpg"}, 
    {nombre: "terminator",url:"imagenes/terminator.jpeg"}, 
    {nombre: "venom",url:"imagenes/venom.jpg"}
];
let tablero = d.querySelector(".tablero");
let imagenNombre = []; // guardar nombres de imagenes
let imgenID = []; //guardar posiciones de imagen
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempotranscurrido;
let  btn_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./sonidos/tap.mp3");
let sonidoAdivinar = new Audio("./sonidos/adivinar.mp3");
let sonidoFallar = new Audio("./sonidos/fallar.mp3");
let sonidoPerdio = new Audio("./sonidos/perdiste.mp3");
let sonidoSiguienteNivel = new Audio("./sonidos/nivelSiguientev.mp3");
let sonidoGanador = new Audio("./sonidos/ganar.mp3");
let sonidoAlarmar = new Audio("./sonidos/alarma.mp3");
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".records tbody");
let fondoPagina = d.querySelector("body");



//setTimeout(); //ejecuta una ves cuando pasa determinado tiempo
//setInterval(); //se ejecuta en determinado tiempo infinitamente
d.addEventListener("DOMContentLoaded",()=>{
    fondoPagina.classList.add("fondo1")
    mostrarDatos();

});


//agregar el evento al boton iniciar
btn_iniciar.addEventListener("click",function(){
   //alert("juego iniciado");
   //comprobar que el juego este activo
   if(estoyJugando == false && nivel == 1){
     VentanaModal();  
    
    

   }else if(estoyJugando == false && nivel == 2){
    estoyJugando = true;
    nivel2();

   }else if(estoyJugando == false && nivel == 3){
    estoyJugando = true;
    nivel3();

   }
   
   

   

});




//funcion para agregar las imagenes al tablero
function agregarImagenes(){
    //agegar imagenes dependiendo del nivel

    if(nivel == 1){
        imagenNivel = imgN1

    }else if(nivel == 2){
        imagenNivel = imgN2

    }else if(nivel == 3){
        imagenNivel = imgN3

    }

    //colocar imagenes aletorias
    imagenNivel.sort(()=>Math.random()- 0.5);
    //recorrer con un foreach las imagenes del array
    imagenNivel.forEach((imagen,i)=>{
        let div = d.createElement("div");  //crear div
        div.className = "col-3"  //agregar la clase col-3 al div
        let img = d.createElement("img"); // crea etiqueta img
        img.className = "img-fluid altura-img", // agregar la class img-fluid a la img
        img.id = i; //enumerar las imagenes de un id
        img.src = "imagenes/ocultar.jpg"; //agregar la ubicacion de la imagen
        img.addEventListener("click", mostrarImg   ); // agregar evento click a la imagen
        div.appendChild(img);//agregar la imagen al div
        tablero.appendChild(div); // agregar los div al tablero

        

    });
}

// funcion para mostrar las imagenes ocultas
function mostrarImg(){
    sonidoSeleccionar.play();
   let imgID = this.getAttribute("id");
   // alert("# de imagen: " +imgID);
   this.src =  imagenNivel[imgID].url;
   imagenNombre.push(imagenNivel[imgID].nombre); // guardar los nombres de la imagen
   imgenID.push(imgID); //guardar las pocicion de la imagen

   if(imagenNombre.length == 2){
    setTimeout(compararImg , 200);
    
   }



}

//funcion para comparar imagenes
function compararImg(){
    let imagenesTablero = d.querySelectorAll(".tablero  div  img");
   // console.log(imagenesTablero);
   if(imagenNombre[0] == imagenNombre[1]){
    if(imgenID[0] != imgenID[1]){
        //alert("adivinaste una imagen");
        sonidoAdivinar.play();
        imagenesTablero[imgenID[0]].src ="imagenes/ok.jpg"
        imagenesTablero[imgenID[1]].src ="imagenes/ok.jpg"
        imagenesTablero[imgenID[0]].removeEventListener("click",mostrarImg);
        imagenesTablero[imgenID[1]].removeEventListener("click",mostrarImg);
        aciertos++;
        mostrarAciertos.textContent = aciertos;

    }else{
        alert("debes escoger otra imagen")
         imagenesTablero[imgenID[0]].src ="imagenes/ocultar.jpg"
         intentos++;
         mostrarIntentos.textContent = intentos;
    }
   
   

   }else{
    //alert("fallaste son diferentes")
    sonidoFallar.play();
    imagenesTablero[imgenID[0]].src ="imagenes/ocultar.jpg"
     imagenesTablero[imgenID[1]].src ="imagenes/ocultar.jpg"
     intentos++;
     mostrarIntentos.textContent = intentos;
   }
   imagenNombre = [];
   imgenID = []; 
   //comprobar si se adivino todas las imagenes
   if(nivel == 1 && aciertos == 6){
    alert("💥FELICIDADES HAS GANADO, PASA AL OTRO NIVEL💥") //para colocar emojis usar la tecla windos + .
    fondoPagina.classList.replace("fondo1" , "fondo2")
    // recargar la tabla
    //location.reload();
    totalIntentos += intentos;
    totalTiempo += tiempo;
    tiempoSobrante += (60 - tiempo);
    obtenerDatos();
    sonidoSiguienteNivel.play(), 
    nivel++;
    mostrarNivel.textContent= nivel;
    intentos = 0;
    mostrarIntentos.textContent = intentos;
    aciertos = 0;
    mostrarAciertos.textContent = aciertos;
    clearInterval(tiempotranscurrido);
    tiempo = 55;
    mostrarTiempo.textContent = tiempo;
    estoyJugando = false;
    quitarImg();

    //agregarImagenes()
   }else if(nivel == 2 && aciertos == 8){
    alert("💥FELICIDADES HAS GANADO, PASA AL OTRO NIVEL💥");
    fondoPagina.classList.replace("fondo2" , "fondo3")
    sonidoSiguienteNivel.play(),
    nivel++;
    mostrarNivel.textContent= nivel;
    intentos = 0;
    mostrarIntentos.textContent = intentos;
    aciertos = 0;
    mostrarAciertos.textContent = aciertos;
    clearInterval(tiempotranscurrido);
    tiempo = 50;
    mostrarTiempo.textContent = tiempo;
    estoyJugando = false;
    quitarImg();
   }else if(nivel == 3 && aciertos == 10){
    alert("💥FELICIDADES HAS GANADO EL JUEGO💥");
    sonidoGanador.play();
    location.reload();

   }
   

}


function nivel1(){
    //AGREGAR LAS IMAGENES AL TABLERO
   agregarImagenes();
   mostrarNivel.textContent = nivel;
   tiempoDeJuego();

}
function nivel2(){
    //AGREGAR LAS IMAGENES AL TABLERO
   agregarImagenes();
  
   tiempoDeJuego();

}
function nivel3(){
    //AGREGAR LAS IMAGENES AL TABLERO
   agregarImagenes();
  
   tiempoDeJuego();

}


function tiempoDeJuego(){
    //controlar el tiempo del juego
    tiempotranscurrido = setInterval(()=>{
    tiempo--;
    mostrarTiempo.textContent = tiempo;
    if(tiempo == 10){
        alert("🏃‍♂️rapido el tiempo se esta agotando🏃‍♀️");
        sonidoAlarmar.play();
        mostrarTiempo.classList.add  ("tiempo-agotado");      
        

    }else if(tiempo ==0){
        alert("el tiempo se agoto has perdido, intenta de nuevo 😞😭")
        sonidoPerdio.play(),
        clearInterval(tiempotranscurrido);
        setTimeout(()=>{
            location.reload();


        }, 3000)
        

    }
 }, 1000) //continuar video 7 minuto 08:56 y minuto24:36 para hacer box sadow

}

function quitarImg(){
    let imagenQuitar = d.querySelectorAll(".tablero div");
    imagenQuitar.forEach((img)=>{
        img.remove();

    }); // video 9 minuto 25:26 para seguir
}

// moatrar ventana modal
function VentanaModal(){
    let moatrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre-jugador");
    let btnJugador = d.querySelector(".registrar-jugador");
    //botones para cerra ventana modal
    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            moatrarModal.classList.remove("show");
            moatrarModal.style.display = "none";
        });

    });

    //mostrar la ventana modal
    moatrarModal.classList.add("show");
    moatrarModal.style.display = "block";
    //evento click al boton azul del modal
    btnJugador.addEventListener("click",()=>{
        //mostrar el nombre en el tablero
        mostrarJugador.textContent = inputJugador.value;
        //cerrar ventana moda
        moatrarModal.classList.remove("show");
        moatrarModal.style.display = "none";
        //iniciar nivel 1
        estoyJugando = true;
        nivel1();  
        

    }); //video 12 minuto 09:55 subir al hosting
}



