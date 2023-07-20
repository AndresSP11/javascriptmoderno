/*aqui vamos hacer la parte de los codigos */
console.log("Bienvenidos alp oryecto");
const grado=[12,15,16,20,85,12,41];

/*Retornaremos en un map para ver que este activo o mejor*/

grado.forEach( elemente =>{
    console.log(elemente);  
})
/*Aqui solamente coloca o mapea más no coloca como arreglo*/
const mapeado= grado.map(elemento=>{
    return elemento+2;
})
console.log(mapeado);