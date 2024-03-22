//Funciones de orden superior
//una función de OS es una función que pueden recibir por PARÁMENTRO UNA FUNCIÓN
//O EN SU DEFECTO RETORNAR OTRA FUNCIÓN. 

//Sintaxis:
//cuando recibo por parámetro una función:
// function estoEsUnaFuncion (funcion()){

// }

// //cuando recibo una función para retornar:
// function estoEsUnaFuncion(){
//     return function()
// }

//Métodos de búsqueda y transformación:
//JS incluye de forma nativa varias funciones de OS.
//Los métodos de búsqueda y transformación los voy a aplicar sobre arrays 
//y nos va a permitir operar sobre ellos. 

//Vamos a crear Productos: 

//primero construyo la clase (no olvidar el constructor)
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto ("Fideos", 100);
const harina = new Producto ("Harina", 250);
const gaseosa = new Producto ("Gaseosa", 180);
const pan = new Producto ("Pan", 120);

//Vamos a crear un array  que va a ALMACENAR todos estos productos:

const arrayProductos = [fideos, harina, gaseosa, pan];
console.log(arrayProductos);

//Método nativos:
//ForEach => recorrer el array y ejecuta una función por CADA ELEMENTO. 
console.log ("ForEach:   ")

//arrow function: es una función simple, acortada y dinámica por su sintaxiS
//Y LA PUEDO USAR EN UNA FUNCIÓN DE ORDEN SUPERIOR COMO PARÁMETRO Y ADEMÁS OPTIMIZARLA,
//PORQUE YA NO NECESIO DECLARAR EL NOMBRE DE UNA VARIABLE

// let flecha = (producto) => {
//     console.log(producto)
//     }
    
arrayProductos.forEach((producto)=>{
    console.log(producto)
})

//quiero recorrer el array de productos pero no quiero mostrar todo,
// sino solo la propiedad precio.
arrayProductos.forEach(producto => console.log (producto.precio));

//Método find: busca un elemento del array 
//y retorna el primero de los elemento que cumple con una condición.

const buscado = arrayProductos.find (producto => producto.nombre === "Harina");
console.log(buscado);

//Método filter : recibe una función comparadora por parámetros 
//y retorna un nuevo array con los elemento que cumplan con la condición;

const arrayProductosMenor200 = arrayProductos.filter (producto => producto.precio < 200);
console.log (arrayProductosMenor200);

//Método Some: funciona igual que el filter con la diferencia que retorna true o false si encuentra o no el elemento.
const hayFideos = arrayProductos.some (producto => producto.nombre === "Fideos");
console.log(hayFideos);

//Map : me permite crear un nuevo array con todos los elementos del array pero transformados.
//EJ: si quiero crear un array de productos como el original pero que el precio incluya el IVA.

//Primero creo un array para almacenar el resultado de esta operación.

const arrayProductosConIva = arrayProductos.map( (producto) => {
    return {
        nombre: producto.nombre,
        precio: (producto.precio *1.21)
    }
});
console.log(arrayProductosConIva);

//6) Reduce: nos permite obtener un único valor después de iterar sobre un array.
//Ej: se puede utilizar para la sumatoria de los elementos de un carrito

//podemos trabajar con dos parámetros: un acumulador y un elemento a operar.  
//también debemos colocar el valor inicial del acumulador.

let totalPrecio = arrayProductos.reduce ((acumulador, elemento)=> acumulador + elemento.precio, 0);
console.log(totalPrecio);

//7 SORT: me permite reordenar un array segun un criterio que definamos. 
//Es uno de los llamados métodos destructivos porque:
// va a ir al array original y lo va a cambiar. 
// a = menor b = mayor

//ordenar los precios de menor a mayor
arrayProductos.sort((a , b) => a.precio - b.precio );
console.log(arrayProductos);

