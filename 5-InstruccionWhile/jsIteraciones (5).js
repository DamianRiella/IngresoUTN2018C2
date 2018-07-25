function mostrar()
{

var sexo = (prompt("ingrese su sexo, F ó M:")).toLowerCase();

while(!(sexo == "f" || sexo == "m"))
{
    sexo = (prompt("Error. Ingrese su sexo, F o M:")).toLowerCase();
}

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN