function Twit(titulo, desc) {
	this.titulo = titulo;
	this.desc = desc;
}

Twit.twits =[];

Twit.aceptar = function(e) { //obtener titulo y desc y agregar sus valores a un arreglo
	e.preventDefault()
	var titulo = document.getElementById('titulo').value;
	var desc = document.getElementById('desc').value;
	var twit = new Twit(titulo, desc);

	Twit.twits.push(twit);
	Twit.cancelar(e);
	Twit.mostrar();
	Twit.guardar();

}

Twit.cancelar = function(e) {
	e.preventDefault(); //esto previene que el formulario no se envie. Ya que el comportamiento por defecto del formulario es enviarlo.
	var titulo = document.getElementById('titulo');
	var desc = document.getElementById('desc');
	titulo.value = '';
	desc.value = '';
	}

Twit.mostrar = function() {
	var comentarios='';
	Twit.twits.map(function(elemento, indice){  //elemento del array, indice del array
	comentarios = comentarios + '<article>'
				+ '<h2>' +elemento.titulo + '</h2><p>' 
				+ elemento.desc + '</p></article>';
	});
document.getElementById('comentarios').innerHTML = comentarios; //objeto, otro objeto, propiedad del objeto
}																



Twit.guardar = function() {
	var twits = Twit.twits;
	var twitsEncoded = JSON.stringify(twits);
	localStorage.setItem('twits', twitsEncoded);
}

Twit.obtenerTwits = function() {
	var twitsEncoded = localStorage.getItem('twits');
	var twits = JSON.parse(twitsEncoded);
	Twit.twits = twits;

}

Twit.obtenerTwits();
Twit.mostrar();

/*
<article>
<h2>Titulo</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consequuntur itaque sunt,
eaque voluptas laudantium iure rerum ad, eius assumenda dicta asperiores nihil minus est quas 
deserunt doloribus ratione vero.</p>

</article>	*/




/*
Twit.imprimir = function() {
console.log('hola!');
}
var twit = new Twit('Titulo', 'Lorem...');

Twit.imprimir(); //Esta si funciona. Porque es el metodo de la clase (esta con mayuscula como la clase).
twit.imprimir(); //Los metodos de clase no son accesibles por las instancias (estam en minusculas, no estan definidas)
*/


