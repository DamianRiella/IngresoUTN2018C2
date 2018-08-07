/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100
(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/

function mostrar()

{
 var letra;
 var numero;
 var cantiPares = 0;
 var cantiImpares = 0;
 var cantiCeros = 0;
 var promedio;
 var acumNegativos = 0;
 var acumPositivos = 0;
 var maxLetra;
 var minLetra;
 var minNum;
 var maxNum;
 var respuesta;
 var flag = 0;
 var contaPositivos = 0;

 

 do
 {
 
  numero = parseint(prompt("Ingrese un numero entre -100 y 100:")); 

  while(numero < -100 || numero > 100 || isNaN(numero))
  {
    numero = parseint(prompt("Error. Ingrese un numero entre -100 y 100:"));
  }
  
  letra = prompt("Ingrese una Letra:");

  if( numero % 2 == 0)
  {
    cantiPares++;
  }
  else
  {
    cantiImpares++;
  }
  
  
    if (numero > 0)
    {
      acumPositivos = acumPositivos + numero;
      contaPositivos++;
    }
    else if(numero < 0)
    {
      acumNegativos = acumNegativos + numero;
    }
    else
    {
      cantiCeros++;
    }
  
       if(maxNum < numero || flag == 0)
       {
         maxNum = numero;
         maxLetra = letra;

       }
       
    if(minNum > numero || flag == 0)
    {
      minNum = numero;
      minLetra = letra;

      flag = 1;

    }

   respuesta= (prompt("Desea continuar:")).toLowerCase();

 }while( respuesta == "si" );

 //Calculos:

 promedio = acumPositivos / contaPositivos; 

 //Respuestas:

 document.write("La cantidad de numeros pares: " + cantiPares + "<br>" );
 document.write("La cantidad de numeros impares: " + cantiImpares+ "<br>");
 document.write("La cantidad de ceros: " + cantiCeros + "<br>");
 document.write(" El promedio de todos los numeros positivos: " + promedio + "<br>");
 document.write("La suma de todos los numeros negativos: " + acumNegativos + "<br>");
 document.write("El numero maximo fue " + maxNum + " y su letra es " + maxLetra + "<br>");
 document.write("El numero minimo fue " + minNum + " y su letra es " + minLetra);
}