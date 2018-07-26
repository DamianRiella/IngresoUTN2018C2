function mostrar()
{
    var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
    var numero;
do
{

	numero = parseInt(prompt("Ingrese numero: "));

	 if(numero < 0)
	 {
		 negativo = negativo * numero;
		 contador++;
	 }

     else
	 {
		 positivo = positivo + numero;
	 }

	  respuesta = prompt("Desea seguir continuar?");
	 

} while(respuesta == "si");

document.getElementById('suma').value=positivo;

if( contador == 0)
{
	negativo = 0;
}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN