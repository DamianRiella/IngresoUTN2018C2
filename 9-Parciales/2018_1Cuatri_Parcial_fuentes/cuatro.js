function mostrar()
{

   var numUno;
   var numDos;
   var resultado;

   numUno = prompt("Ingrese primer numero:");
   numDos = prompt("Ingrese segundo numero:");

   if( numUno == numDos )
   {
       
       resultado = numUno + numDos;

       alert(resultado);
   }
   
   else if( parseInt(numUno) > parseInt(numDos))
   {

       resultado = numUno - numDos;

       alert(resultado);

   }

   else
   {

       resultado = parseInt(numUno) + parseInt(numDos);

       if( resultado > 10 )
       {
           alert("La suma es " + resultado + " y supero el 10");

       }

       else
       {
           alert("La suma es " + resultado);
       }
   }
}
