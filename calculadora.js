function concatenar(dato){
notas = document.getElementById('resultado');
notas.value += dato;

}
function borrar(){
resultado.value = "";
}
function igual(){
	resultados = document.getElementById('resultado').value;
	resultado1 = eval(resultados);
	resultado.value=resultado1;	
}