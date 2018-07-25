function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9:");

	while(numero < 0 || numero > 9)
	{
		numero = prompt("Numero incorrecto. Ingrese un número entre 0 y 9:");
	}

    alert("Numero valido");
	
}//FIN DE LA FUNCIÓN