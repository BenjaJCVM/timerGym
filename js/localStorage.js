import {tiempoCircuitosPopulares} from "./funciones.js";
import {elementos} from "./elementos.js";

let cont = []; //almacenar en el local storage
let contenedorCircuitosAnteriores = document.querySelector(".contenedorCircuitosAnteriores");

export const insertarContenedor = (circuito) => {
    const contenedor = document.createElement('div');
    const usar =  document.createElement('button');
	usar.className = 'usarCircuitoPopular';
    usar.textContent = 'Usar'
    contenedor.classList = 'card';
    contenedor.innerHTML = `
    <h4>${circuito.nombre}</h4>
	<p>Inicio: ${circuito.inicio}</p>
	<p>Trabajo: ${circuito.trabajo}</p>
	<p>Descanso: ${circuito.descanso}</p>
	<p>Ciclos: ${circuito.ciclos}</p>`;
    contenedorCircuitosAnteriores.append(contenedor);
    contenedor.append(usar);
    usar.addEventListener('click', () =>{
        tiempoCircuitosPopulares(circuito);
        elementos.tiempoReinicio = elementos.tiempoRestante;
    })
}

export function obtenerCircuito(){
    let contStorage = JSON.parse(localStorage.getItem('cont'));
    if (!!contStorage && contStorage.length > 0) {
        for (const circuito of contStorage) {
          insertarContenedor(circuito);
        }
    }
}

export function guardarCircuito(circuito){
    cont.push(circuito);
    localStorage.setItem('cont', JSON.stringify(cont));
}

