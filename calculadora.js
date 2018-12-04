function concatenar(dato){
notas = document.getElementById('resultado');
notas.value += dato;

}
function borrar(){
resultado.value = "";
}
function igual(){
	if (resultado.value == '0000') {open('secr.html')}
	resultados = document.getElementById('resultado').value;
	resultado1 = eval(resultados);
	resultado.value=resultado1;	
}
var con;
var aux = 0;
function guardar(){
	con = document.getElementById("cont").value;
	localStorage.contenido = con;
	localStorage.aux = 1;
	aux = "1";
}
function importar() {
	if (localStorage.aux == 1) {
		document.getElementById("cont").value = localStorage.contenido;
	}
}
function test() {
	if(localStorage.aux == undefined || localStorage.aux == 0){
		document.getElementById("cont").value = "";
	}
}