import {elementos} from "./elementos.js";


function actualizarTiempo(){
    const min = Math.floor(elementos.tiempoRestante / 60);
    const seg = elementos.tiempoRestante % 60;

    elementos.minutos.innerHTML = min.toString().padStart(2, "0");
    elementos.segundos.innerHTML = seg.toString().padStart(2, "0");
}

//ACTUALIZA EL BOTON DE PLAY Y STOP
function actualizarControles(){
    if(elementos.intervalo === null) {
        elementos.control.innerHTML = `<button type="button" class="botonEmpezar botonAcc"><span class="material-icons-round icon">play_arrow</span></button>`;
        elementos.control.classList.add("botonEmpezar");
        elementos.control.classList.remove("botonPausar");
    } else{
        elementos.control.innerHTML = `<button class="botonPausar botonAcc"><span class="material-icons-round icon">pause</span></button>`;
        elementos.control.classList.add("botonPausar");
        elementos.control.classList.remove("botonEmpezar");
    }
}

//HACE FUNCIONAR EL TEMPORIZADOR, RESTA Y ACTUALIZA
function start() {
    if(elementos.tiempoRestante === 0) return;

    elementos.intervalo = setInterval(() => {
        elementos.tiempoRestante--;
        actualizarTiempo();

        if (elementos.tiempoRestante === 0) {
            stop();
        }
    }, 1000);

    actualizarControles();
}

//DETIENE EL FUNCIONAMIENTO DEL TEMPORIZADOR
function stop(){

    clearInterval(elementos.intervalo);
    
    elementos.intervalo = null;

    actualizarControles();
}

export const timer = {
    actualizarTiempo,
    actualizarControles,
    start,
    stop
}