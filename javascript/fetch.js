const url="https://jsonplaceholder.typicode.com/comments";
console.log("Bienvenido")
const consultarAPI= ()=>{
    fetch(url)
        .then((respuesta)=>{
            return respuesta.json
        })
        .then( resultado=>{
            console.log(resultado);
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log("todo listo para ejecutarse");
        })
}
consultarAPI();