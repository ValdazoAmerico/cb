
const flecha = document.getElementById('flecha')
let nos = document.getElementById('nosotros')
let proyectos = document.getElementById('projects')


let contacto = document.getElementById('contact')
let contactoButton = document.getElementById('contactoButton')
let contactoButton2 = document.getElementById('contactoButton2')





contactoButton2.addEventListener('click', function(){
    let pos1 = contacto.getBoundingClientRect().top
    window.scrollTo(0, pos1 -10);
})

    

flecha.addEventListener('click', function() {
    let pos1 = nos.getBoundingClientRect().top
    window.scrollTo(0, pos1 - 70);
})



window.addEventListener('scroll', function(){
    let animacion = document.getElementById('nosotros');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
   
    let tamaniopantalla = window.innerHeight;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
    }
    
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('projects');
    let posicionOjb1 = animacion.getBoundingClientRect().top;

    let tamaniopantalla = window.innerHeight;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
    }
    
})


window.addEventListener('scroll', function(){
    let animacion = document.getElementById('SERVICES');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
   
    let tamaniopantalla = window.innerHeight;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
    }
    
})




window.addEventListener('scroll', function(){
    let animacion = document.getElementById('contact');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
  
    let tamaniopantalla = window.innerHeight;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
       
    }
   
})