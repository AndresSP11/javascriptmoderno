/* Union de objetos en caso de que las APIs nos brinden o boten resultados por ojetos separados*/
const Producto={
    nombre:"Coronita",
    disponibilidad:true
}

const Cliente={
    nombre:"Anderson",
    disponibilidad:true
}

const nuevoObjeto={
    Producto,
    Cliente
}
console.log(nuevoObjeto);

let seleccionNombre=nuevoObjeto.Cliente['nombre'];
console.log("Mostrando la selección de nombre...");
console.log(seleccionNombre);
