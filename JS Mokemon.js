const sectionseleccionarAtaque = document.getElementById ("elegir-ataque")
const sectionreiniciar = document.getElementById("boton-reiniciar")
    
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonreiniciar = document.getElementById("boton-reiniciar")

let spanVidasJugador = document.getElementById("vidas-jugador")
let spanVidasEnemigo = document.getElementById("vidas-enemigo")


const botonregresar = document.getElementById("boton-regresar")

const sectionseleccionarMascota = document.getElementById("elegir-mascota")
let mascotaJugador =document.getElementById("mascota-Jugador")
let mascotaEnemigo =document.getElementById("mascota-Enemigo")

const spanMascotaJugador = document.getElementById("mascota-Jugador")
const spanMascotaEnemigo = document.getElementById("mascota-Enemigo")


const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataquesDelJugador")
const ataquesDelEnemigo = document.getElementById("ataquesDelEnemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []  
let ataqueJugador 
let ataqueEnemigo
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let opcionDeMokepones
let botonFuego
let botonAgua
let botonTierra


let vidasJugador = 3
let vidasEnemigo = 3

//plantilla de elementos 

class Mokepon{
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida= vida
        this.ataques = [] 
    }
}
// objetos 
 let hipodoge = new Mokepon("Hipodoge", "pokemones/Hipodoge.png", "5")

 let capipepo = new Mokepon("Capipepo", "./pokemones/capipepo.webp", "5")

 let ratigueya  = new Mokepon("Ratigueya", "./pokemones/Ratigueya.png", "5")

 

 //array para hacer un índice, inyección de información
 mokepones.push(hipodoge, capipepo, ratigueya)
//expresión en la consola de google                                

function iniciarJuego()
{
    //desaparición del segundo panel y reinició
    
    sectionseleccionarAtaque.style.display = "none"
    
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones =  
    ` <input type= "radio" name="mascota"  id=${mokepon.nombre} />
        <label class="tarjetas-mascotas" for=${mokepon.nombre} >
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre} >
      </label> `
//aqui se van poniendo los id de las tarjetas para identificarlas en html y css
    contenedorTarjetas.innerHTML +=   opcionDeMokepones
        
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo  = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
    }) 
    
    sectionreiniciar.style.display = "none"

    botonMascotaJugador.addEventListener("click", ElegirMascotaJugador)
}


// reclamación de botones 

botonreiniciar.addEventListener("click", reiniciarjuego);

botonregresar.addEventListener("click", reiniciarjuego);





//Elegir mascota
function ElegirMascotaJugador()
{
    
    sectionseleccionarMascota.style.display = "none"
   
    sectionseleccionarAtaque.style.display = "flex"
   

 //Aviso y selección de mascota
 //creamos mascotaJugador para que podamos buscar sus ataques
if(inputHipodoge.checked) 
    { 
    spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador = inputHipodoge.id
     }
else if(inputCapipepo.checked)
    {
    spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador = inputCapipepo.id
    }
else if(inputRatigueya.checked)
    {
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
    }
   
else {
    alert("Selecciona una mascota porfavor")
    reiniciarjuego()
    }

}


    botonFuego = document.getElementById("boton-fuego")
    botonTierra = document.getElementById("boton-tierra")
    botonAgua = document.getElementById("boton-agua")

    botonAgua.addEventListener("click", ataqueAgua);

    botonTierra.addEventListener("click", ataqueTierra);

    botonFuego.addEventListener("click", ataqueFuego);
    
    function escogerAtaqueJugador()
    {
    if (ataqueJugador == "FUEGO")
        {
            alert("Has escogido el ataque de FUEGO")
        }
    else if(ataqueJugador == "AGUA")
        {
            alert("Has escogido el ataque de AGUA")
        }
    else if(ataqueJugador == "TIERRA")
        {
            alert("Has escogido el ataque de TIERRA")
        }
    
    }
 
    //Seleccionar Mascota enemigo
function aleatorio(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}

  function escogerMascotaEnemigo() { aleatorio(0, mokepones.length -1)
       
        
}
function escogerMascotaEnemigo(){
     mascotaEnemigo = escogerMascotaEnemigo
     if(mascotaEnemigo == 1)
    {
        escogerMascotaEnemigo == "Hipodoge"
    } 
    else if(escogerMascotaEnemigo == 2)
    {
        mascotaEnemigo = "Capipepo"
    } 
    else if (escogerMascotaEnemigo == 3)  
    {
        mascotaEnemigo = "Ratigueya"
    }
    spanMascotaEnemigo.innerHTML = mascotaEnemigo
}  
//llamado de ataque
   

//funcion botones elementos
function ataqueFuego() 
{
    ataqueJugador = "FUEGO"
    
    escogerAtaqueEnemigo() 
}

function ataqueAgua()
{
    ataqueJugador = "AGUA"

    escogerAtaqueEnemigo()  
}

function ataqueTierra()
{
    ataqueJugador = "TIERRA"

    escogerAtaqueEnemigo()  
}
  
    
//selección ataque computadora
function escogerAtaqueEnemigo(){
    let elegirAtaqueEnemigo = aleatorio(1,3)
     if(elegirAtaqueEnemigo == 1)
    {
        ataqueEnemigo == "FUEGO"
    } 
    else if(elegirAtaqueEnemigo == 2)
    {
         ataqueEnemigo = "AGUA"
    } 
    else if (elegirAtaqueEnemigo == 3)  
    {
         ataqueEnemigo = "TIERRA"
    }
   
    Combate()
}  

function Combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate")
    } else if (
        ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ||
       
        ataqueJugador == "TIERRA" && ataqueEnemigo == "FUEGO" ||
       
        ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"
        || ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" )
     { 
    crearMensaje("Ganaste")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else { 
        crearMensaje("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }
vidasTotales()
    
}
function vidasTotales(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal(
            "¡Ganaste el Juego!🏅")
 
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Más suerte la próxima 😥")
    } 
  
}

function crearMensaje(resultado){
    //reclamación de sección y elementos del parrafo de HTML a JV
    
    //¿qué se va a crear en HTML? =un parrafo
    let nuevoAtaquesDelJugador = document.createElement('p')
    let nuevoAtaquesDelEnemigo = document.createElement('p')
//información del parrafo en HTML
    sectionMensajes.innerHTML = resultado
    nuevoAtaquesDelJugador.innerHTML = ataqueJugador
    nuevoAtaquesDelEnemigo.innerHTML = ataqueEnemigo
//¿En donde poner esa información?
  
    ataquesDelJugador.appendChild(nuevoAtaquesDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaquesDelEnemigo)
}

function crearMensajeFinal(resultadofinal){
       
        sectionMensajes.innerHTML = resultadofinal 
        
        botonFuego.disabled = true;
      
        botonAgua.disabled = true;
        
        botonTierra.disabled = true;
      
        sectionreiniciar.style.display = "block";       
}

function reiniciarjuego()
{location.reload()}
window.addEventListener("load", iniciarJuego)    