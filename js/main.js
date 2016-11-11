
function mensaje(){
	//tomo div vacio id conversacion
	var contenedor = document.getElementById('conversacion');
	//tomo texto de input busqueda
	var textoRescatadoInput = document.getElementsByClassName('w-write-message-field')[0].value;
	//se limpia input busqueda
	document.getElementsByClassName('w-write-message-field')[0].value = "";
	//nodo texto del input
	var textoNuevoMensaje = document.createTextNode(textoRescatadoInput);
	var hora = document.createTextNode('14:28');
	var contenedorHora = document.createElement('div');
	contenedorHora.setAttribute('class', 'time');
	var parrafo = document.createElement('p');
	var mensajeUno = document.createElement('div');
	mensajeUno.setAttribute('class', 'w-message-text');
	var mensajeDos = document.createElement('div');
	mensajeDos.setAttribute('class', 'w-message w-message-out');
	//asigno hijos
	contenedor.appendChild(mensajeDos);
	mensajeDos.appendChild(mensajeUno);
	mensajeUno.appendChild(parrafo);
	parrafo.appendChild(textoNuevoMensaje);
	mensajeUno.appendChild(contenedorHora);
	contenedorHora.appendChild(hora);
}

function conversacion(){
	//tomo div contenedor avatar
	var contenedorChat = document.getElementById('sec');
	var conversaciones = document.getElementById('chat');
	//asigno hijo a padre mayor
	contenedorChat.appendChild(conversaciones);
	//le indico al padre que borre a su hijo inmediato
	contenedorChat.removeChild(conversaciones);

}
