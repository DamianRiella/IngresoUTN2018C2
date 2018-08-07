function mostrar()
{
 var planeta = (prompt("Ingrese un planeta del sistema solar:")).toLowerCase();

  switch(planeta)
{
    case "tierra":
                  alert("Aca vivimos.");
                  break;
    case "mercurio":
    case "venus":
                   alert("Aca hace mas calor.");
                   break;    
    case "neptuno":
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
                   alert("Aca hace mas frio.");
                   break;   
    default:
            alert("No es un planeta valido");                        

}

}
