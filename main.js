
const flecha = document.getElementById('flecha')
let nos = document.getElementById('nosotros')
let proyectos = document.getElementById('projects')
let proyectosButton = document.getElementById('projects-button')

let contacto = document.getElementById('contact')
let contactoButton = document.getElementById('contactoButton')
let contactoButton2 = document.getElementById('contactoButton2')
let nosotrosButton = document.getElementById('nosotrosButton')
let testimonials = document.getElementById('testimonials')
let testimonialBUtton = document.getElementById('testimonialButton')

proyectosButton.addEventListener('click', function(){
    let pos1 = proyectos.getBoundingClientRect().top
    window.scrollTo(0, pos1);
})

contactoButton.addEventListener('click', function(){
    let pos1 = contacto.getBoundingClientRect().top
    window.scrollTo(0, pos1);
})
contactoButton2.addEventListener('click', function(){
    let pos1 = contacto.getBoundingClientRect().top
    window.scrollTo(0, pos1);
})
nosotrosButton.addEventListener('click', function(){
    let pos1 = nos.getBoundingClientRect().top
    window.scrollTo(0, pos1);
})

testimonialBUtton.addEventListener('click', function(){
    let pos1 = testimonials.getBoundingClientRect().top
    window.scrollTo(0, pos1);
})


flecha.addEventListener('click', function() {
    let pos1 = nos.getBoundingClientRect().top
    window.scrollTo(0, pos1);
})



window.addEventListener('scroll', function(){
    let animacion = document.getElementById('nosotros');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
   
    let tamaniopantalla = window.innerHeight/3;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
    }
    if(posicionOjb1 > tamaniopantalla){
        animacion.classList.remove('mover');
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('projects');
    let posicionOjb1 = animacion.getBoundingClientRect().top;

    let tamaniopantalla = window.innerHeight/3;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
    }
    if(posicionOjb1 > tamaniopantalla){
        animacion.classList.remove('mover');
    }
})


window.addEventListener('scroll', function(){
    let animacion = document.getElementById('SERVICES');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
   
    let tamaniopantalla = window.innerHeight/3;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
    }
    if(posicionOjb1 > tamaniopantalla){
        animacion.classList.remove('mover');
    }
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('testimonials');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
  
    let tamaniopantalla = window.innerHeight/3;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
       
    }
    if(posicionOjb1 > tamaniopantalla){
       
        animacion.classList.remove('mover')
        
    }
})


window.addEventListener('scroll', function(){
    let animacion = document.getElementById('contact');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
  
    let tamaniopantalla = window.innerHeight/3;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
       
    }
    if(posicionOjb1 > tamaniopantalla){
       
        animacion.classList.remove('mover')
        
    }
})