/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	 var preciolamparas = 35;
     var contidadLamparas = 0;
     var precioFinal;
     var marcaLamparas;
     var descuento;
     var porcentaje; 
     var resultado;
     var impuesto;

     cantidadLamparas = parseint(document.getElementById("Cantidad").value);
     marcaLamparas = document.getElementById("Marca").value;

     switch( cantidadLamparas)
     {
         case "1":
         case "2":
                 porcentaje = 0;
                 break;
         case "3":
                 if( marcaLamparas == "ArgentinaLuz" )
                 {
                  //desuento del 15%
                  porcentaje = 15;
                 }
                 else if(marcaLamparas == "FelipeLamparas")
                 {
                 //desuento del 10%
                 porcentaje = 10;
                 
                 }
                 else
                 {
                 //desuento del 5%
                 porcentaje = 5;
                
                 }
                 break;
         case "4":
                 if( marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
                 {
                     porcentaje = 25;
                 }
                 else
                 {
                     porcentaje = 20;
                 }
                 break;
         case "5":
                 if(marcaLamparas == "ArgentinaLuz")
                 {
                     porcentaje = 40;
                 }
                 else
                 {
                     porcentaje = 30;
                 }
                 break;
         default:
                porcentaje = 50;

     }
}
