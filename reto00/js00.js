const header=document.querySelector('.header');
const inpu=document.querySelector('.intro');
const boton=document.querySelector('.enviar');

inpu.addEventListener('input',()=>{
    header.textContent=inpu.value;
})