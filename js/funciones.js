import { elementos } from "./elementos.js";

export function calcularTiempo(circuitos){
    let trabajoCompleto;
    for(const circuito of circuitos){
        let trabajo = circuito.trabajo * circuito.ciclos;
        let descanso = circuito.descanso * circuito.ciclos;
        trabajoCompleto = trabajo + descanso;
    }
    return trabajoCompleto;
}

export function tiempoCircuitosPopulares(circuitos){

    let trabajo = circuitos.trabajo * circuitos.ciclos;
    let descanso = circuitos.descanso * circuitos.ciclos;
    let inicio = Number(circuitos.inicio);

    elementos.tiempoRestante = trabajo + descanso + inicio;

    const min = Math.floor(elementos.tiempoRestante / 60);
    const seg = (elementos.tiempoRestante % 60);

    elementos.minutos.innerHTML = min.toString().padStart(2, "0");
    elementos.segundos.innerHTML = seg.toString().padStart(2, "0");
}
