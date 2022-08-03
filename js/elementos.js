//FORMULARIO
let formularioTiempos = document.querySelector("#formularioTiempos");
//CONTROLES
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
let control = document.querySelector('.botonEmpezar');
let reiniciar = document.querySelector('.botonReiniciar');
//VARIABLE
let tiempoRestante = 0;
let intervalo = null;
let tiempoReinicio = 0;
//ARRAY
const circuitosArray = [];//almacenar los circuitos

export const elementos = {
    formularioTiempos,
    minutos,
    segundos,
    control,
    reiniciar,
    tiempoRestante,
    intervalo,
    circuitosArray,
    tiempoReinicio
}