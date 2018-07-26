function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta= "si";
    var numero;
	var promedio;

   // respuesta = prompt("Desea sumar numeros y obtener el promedio?");

	while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese un Numero:"));

		acumulador = acumulador + numero;
        contador = contador + 1;

		respuesta = prompt("Desea seguir continuar?");

	}

promedio = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN