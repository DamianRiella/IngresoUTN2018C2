function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
    nota = Math.floor(Math.random()*(max - min) + min);

	if(nota > 8)
	{
		alert("Exelente " + nota);
	}
	else if( nota >= 4)
	{
		alert("Aprobo "+ nota);
	}
	else
	{
		alert("Vamos, la proxima se puede " + nota);
	}
}//FIN DE LA FUNCIÓN