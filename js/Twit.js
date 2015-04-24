	function Twit(titulo, desc) {
		this.titulo = titulo;
		this.desc = desc;
	}

Twit.twit =[];
	Twit.aceptar = function() { //obtener titulo y desc y agregar sus valores a un arreglo
		var titulo = document.getElementById('titulo').value;
		var desc = document.getElementById('desc').value;
		var twit = new Twit(titulo, desc);

		Twit.twits.push(twit);
		console.log(twit)

	}

	Twit.cancelar = function() {
		event.preventDefault(); //esto previene que el formulario no se envie. Ya que el comportamiento por defecto del formulario es enviarlo.
		var titulo = document.getElementById('titulo');
		var desc = document.getElementById('desc');
		titulo.value = '';
		desc.value = '';
	}
/*
Twit.imprimir = function() {
	console.log('hola!');
	}
var twit = new Twit('Titulo', 'Lorem...');

Twit.imprimir(); //Esta si funciona. Porque es el metodo de la clase (esta con mayuscula como la clase).
twit.imprimir(); //Los metodos de clase no son accesibles por las instancias (estam en minusculas, no estan definidas)
*/


