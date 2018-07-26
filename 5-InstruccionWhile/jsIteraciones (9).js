function mostrar()
{

	var flag = 0;
	var maximo;
	var minimo;
	var numero;
    var respuesta;

do
{

numero = parseInt(prompt("Ingrese un numero:"));

	if( numero > maximo || flag == 0)
	{
       maximo = numero;
	}

    if( numero < minimo || flag == 0 )
	{
		minimo = numero;

		flag = 1;
	}

respuesta = prompt("Desea ingresar numero?");

} while( respuesta = "si");

documen.getElementById("minimo").value = minimo;
documen.getElementById("maximo").value = maximo;

}//FIN DE LA FUNCIÓN