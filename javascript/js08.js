const arreglo=['apple','numero','nose'];
const numeros=[15,20,35,14,40];

let resultado=numeros.filter(elemento=>{
    return elemento%5!=0;
})
console.log(resultado);

resultado= numeros.some(numero=> numero>35); /* Te retorna trues si es que existe un numero que sea mayor a a 35... lo convalida 
o lo valida */

/* every es la misma condicion que some , pero en este caso todo los nukmeros tiene que cumplir la condicion para que que te retorne true */