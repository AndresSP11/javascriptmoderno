const Producto={
    nombre:"Coronita",
    disponibilidad:true
}

const Cliente={
    nombre:"Anderson",
    disponibilidad:true
}

const {nombre:nombreProducto} = Producto;
const {nombre:nombreCliente} = Cliente;

console.log("Obteniedo el nombre de Producto");
console.log(nombreProducto);
console.log("Obteniendo el nombre de cliente")
console.log(nombreCliente)