/*Que son los Objetos*/
const Producto={
    nombre: "Pilsen",
    tipo: "Cerveza",
    disponibilidad: true
};
/*Digamos que se desea agregar un archivo en el cual quite los avlores de algunas cosas pero añadirlo en un nuevo producto*/

console.log(Producto);

const {nombre, tipo,...Producto2}= Producto;
console.log("Imprimiendo el Producto numero 2");
console.log(Producto2);
console.log(nombre);

console.log(tipo);
