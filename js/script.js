import Circuito from "./Circuito.js";
import {elementos} from "./elementos.js";
import {calcularTiempo} from "./funciones.js";
import {obtenerCircuito, insertarContenedor, guardarCircuito} from "./localStorage.js";
import {cargarJSON} from "./json.js";
import {timer} from "./timer.js";


elementos.formularioTiempos.onsubmit = (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#inputNombre').value;
	const inicio = Number(document.getElementById("inputInicio").value);
	const trabajo = Number(document.getElementById("inputTrabajo").value);
	const descanso = Number(document.getElementById("inputDescanso").value);
	const ciclos = Number(document.getElementById("inputCiclos").value);
    
    const circuito = new Circuito(nombre,inicio,trabajo,descanso,ciclos);
    elementos.circuitosArray.push(circuito);


    if(nombre.length <= 0){
		Swal.fire({title: 'Error',text: 'Debe ingresar un nombre.',icon: 'warning',confirmButtonText: 'Aceptar',})
	}
	else if(nombre == Number(nombre)){
		Swal.fire({title: 'Error',text: 'Solo se admiten letras.',icon: 'warning',confirmButtonText: 'Aceptar',})
	}
	else if(inicio <= 0){
		Swal.fire({title: 'Error',text: 'Debe ingresar un tiempo de inicio.',icon: 'warning',confirmButtonText: 'Aceptar',})
	}
	else if(trabajo <= 0){
		Swal.fire({title: 'Error',text: 'Debe ingresar un tiempo de trabajo.',icon: 'warning',confirmButtonText: 'Aceptar',})
	}
	else if(descanso <= 0){
		Swal.fire({title: 'Error',text: 'Debe ingresar un tiempo de descanso.',icon: 'warning',confirmButtonText: 'Aceptar',})
	}
	else if(ciclos <= 0){
		Swal.fire({title: 'Error',text: 'Debe ingresar una cantidad de ciclos.',icon: 'warning',confirmButtonText: 'Aceptar',})
	}else{
        elementos.tiempoRestante = calcularTiempo(elementos.circuitosArray) + inicio;
		elementos.tiempoReinicio = elementos.tiempoRestante
		timer.actualizarTiempo();  
		guardarCircuito(circuito);
		insertarContenedor(circuito);
        timer.stop();
	}
    
}

//EMPEZAR  TEMPORIZADOR
elementos.control.addEventListener("click", () => {
    if (elementos.intervalo === null) {
        timer.start();
    } else {
        timer.stop();
    }
});

//REINICIAR TEMPORIZADOR
elementos.reiniciar.addEventListener("click", () =>{
	elementos.tiempoRestante = elementos.tiempoReinicio;
	timer.actualizarTiempo();
	timer.stop();
});

//OBTENEMOS LOS CIRCUITOS DEL JSON MEDIANTE FETCH
cargarJSON();
//OBTENEMOS EL CIRCUITO DEL LS Y LOS IMPRIMIMOS EN PANTALLA
obtenerCircuito();

