document.writeln("Hola mundo desde un archivo externo")
/* 
Variable: Es un espacio de memoria donde se almacena un dato, que 
se puede cambiar durante la ejecucion del programa.Y se la puede eliminar
cuando ya no se la necesite.
tipos de variables:
variables primitivas:Almacenan datos simples.
variables de tipo objeto: Almacenan datos complejos.
Tipos de datos:le con alcance de bloque, pero su valor no pp
1.Numericas: Enteros y decimales.
variables: de tipo objeto: Cadena de texto, boolean,arreglos y objetos.
especiales: null y undefi:ned.
Declaraciones de variables:
1. var: Declaracion de variable con alcance global o local a una funcion, pero
no a un bloque.
2. let: Declaracion de variable con alcance de bloque.
3. constante: declaracion de variable con alcance de bloque, pero su valor no 
puede cambiar.
Sintaxis una variable no puede iniciar con un numero, 
puede contener espacios, no puede ser una palabra reservada, 
se recomienda usa camelCase*/

var edad = 30;
var nombre = "Juan";
var estatura = 1.75;
var esSoltero = true;
var hijo = null;
var direccion = undefined;
var paises = ["Argentina", "Brasil", "Colombia"];
//document.writeln("<br>");
document.writeln("<h1>Manejo de Java Script</h1>");
//document.writeln("<br>");
document.writeln("Mi edad es:" + edad);
//funciones en javaScript
function mostrarNombre() {
    let nombre = "Pedro";
    document.writeln("<br>");
    document.writeln("Mi nombre es:" + nombre);
}
//manera de llamar a mi funcion
mostrarNombre();
document.writeln("<br> nombre" + nombre);
//funcion que recibe parametros
function sumar(a, b) {
    let resultado;
    resultado = a + b;
    return resultado;
}
//llamamos a la funcion sumar
var suma = sumar(40, 50);
document.writeln("<br>la suma es:" + suma);
/*operadoes aritmeticos:
+:suma
-:resta
*:multiplicacion
/:division
%:modulo(resuido de una division)
++:incremento
--:Devremento
aoperadores de asignacion:
estos operadores se utilizan para asignar valores a las 
variables.
=:Asignacion simple
+=:asignacion con suma (y+= es equivalente a y=y+b)
-=:asignacion con resta (y-= es equivalente a y=y-b)
===:Igualdad estricta(compara valor y tipo)
operadores de comparacion:
estos operadores se utilizan para comparar dos valores u devuelven un valor boolean
==:igualdad
!=:desigualdadaaad
>:mayor que 
<:menor que
>=:mayor o igual que
<=menor o igual que
operadores logicos:
estas operaciones sirven para combinar expresiones bollenas
&&:AND devuelve true si ambas condiciones son verdaderas
||:OR devuelve true si al menos una de las condiciones es verdadera.
¡:NOT invierte el valor de una condicion

La condicion nos permite ejecutar un bloque de codigo si se 
cumple una condicion
sintaxis:
if(condicion){
//bloque de codigo a ejecutar si la condicion es verdadera
}else{
    //bloque de codigo a ejecutar si la condicion es falsa
}
*/
//crear un script donde se verifique la edad mayor de una perosona 
var edadElvis=40;
var edadJustin=40;
if (edadElvis>edadJustin){
    document.writeln("<br> Elvis es mayor que Justin");
}else{
    document.writeln("<br> Justin es mayor que Elvis")
}