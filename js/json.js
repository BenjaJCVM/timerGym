import {tiempoCircuitosPopulares} from "./funciones.js";
import {elementos} from "./elementos.js";

export function cargarJSON(){
    let contenedorCircuitosPopulares =  document.querySelector(".contenedorCircuitosPopulares");
	fetch('./json/circuitos.json')
	.then(res => res.json())
	.then(function circuitosResults(circuito){
	for(const circuitos of circuito){
		const {nombre, inicio, trabajo, descanso, ciclos} = circuitos;
		const card = document.createElement('div');
		const usar =  document.createElement('button');
		usar.className = 'usarCircuitoPopular';
		usar.textContent = 'Usar'
		card.className = 'card';
		card.innerHTML = `
		<h3>${nombre}</h3>
		<p>Inicio: ${inicio}</p>
		<p>Trabajo: ${trabajo}</p>
		<p>Descanso: ${descanso}</p>
		<p>Ciclos: ${ciclos}</p>`;
		contenedorCircuitosPopulares.append(card);
		card.append(usar);
		usar.addEventListener('click', () =>{
			tiempoCircuitosPopulares(circuitos);
			elementos.tiempoReinicio = elementos.tiempoRestante;
		})
	}
	})
	.catch();
}
