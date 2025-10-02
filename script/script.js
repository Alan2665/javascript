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
document.writeln("<br> nombre"+nombre);
