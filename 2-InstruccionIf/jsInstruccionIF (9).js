function mostrar()
{
	//Genero el número RANDOM entre 1 y 10

    var max = 11;
    var min = 1;
    var mostrar;

    mostrar = Math.floor (Math.random()*(max - min) + min);

    alert(mostrar);

}//FIN DE LA FUNCIÓN