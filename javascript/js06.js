/* Añadiendo... la parte de arreglos*/
const tecnologias=['vue.js','react','javascript'];
tecnologias.push('git');
console.log(tecnologias);
tecnologias.unshift('banana','comidita'); /*Añade al inicio las palabras que se quiere añadir solamente*/
tecnologias.shift(); /* Elimina al primero que esta ubicado en elarreglo */ 
tecnologias.pop(); /*Elimina el ultimo del arreglo*/
tecnologias.splice(2,2); /*lO QUE HACE ESTO ES ELIMINAR DE LA POSICION 2, 2 ADELANTE, TAMBIEN SE PUEDE PONER UNO SOLO*/
console.log(tecnologias);