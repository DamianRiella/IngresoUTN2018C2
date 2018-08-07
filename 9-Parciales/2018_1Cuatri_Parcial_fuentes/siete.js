function mostrar()
{
   var nota;
   var sexo;
   var acumNotas= 0;
   var notaBaja;
   var sexoNotaMasBaja;
   var promedio;
   var flag= 0;
   var varonesNotaMas60 = 0;
    
   for(i = 0 ; i < 5 ; i++)
    {
        nota = parseInt(prompt("Ingrese nota:"));

      while(nota < 0 || nota > 10 || isNaN(nota))
      {
          nota = prompt("Error. Ingrese nota:");
      }  
          
        sexo = (prompt("Ingrese sexo:")).toLowerCase();
      
      while(sexo != "f" && sexo != "m")
      {
          sexo = prompt("Error. Ingrese sexo:");
      }  

        acumNotas = acumNotas + nota;
        
      if(notaBaja > nota || flag == 0)
      {
          notaBaja = nota;
          sexoNotaMasBaja = sexo;
          flag = 1;
      }

      if( sexo == "m" && nota >= 6)
      {
          varonesNotaMas60++;
      }
    } 

      promedio = acumNotas / 5;
                
      alert("El promedio de las notas es: " + promedio);
      alert("La nota mas Baja es "+ notaBaja + " y el sexo del alumno es " + sexoNotaMasBaja);
      alert("La cantidad de varones que su nota haya sido mayor o igual a 6 fueron: " + varonesNotaMas60);

    
}
