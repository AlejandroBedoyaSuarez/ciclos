//Ciclos.
//Visualización del mensaje Hola mundo en la página web.
//Repetimos la N cantidad de veces del mensaje hola mundo de esta forma.
document.write("Hola mundo");
document.write("Hola mundo");
document.write("Hola mundo");
//For es un ciclo el cual tiene 3 parámetros.
//La función es repetir un bloque de código las veces necesarias.
/*Sintaxis básica
for (condición){
    bloque de código
}*/
//Se repetira 11 veces el mensaje desde el 0 hasta 10
//Mi ciclo empezara desde 0, 0 es menor igual a 10 y se repetira la N cantidad de veces.
//el "br" especifica el salto de línea para mejor visualización de las repeticiones del mensaje.
//Encontrar los numeros pares del 3 al 15.
 for (i=3 ; i<=15; i++){
    //salto de línea mas el mensaje "Hola desde js" mas dos saltos de línea.
    //document.write("<br>"+"Hola desde js"+"<br>"+"<br>");
    //Nos muestra los numeros del 0 al 10.
    document.write(i+"<br>");
    if(i%2==0){
        document.write("numero par"+i+"<br>");
    }
}
