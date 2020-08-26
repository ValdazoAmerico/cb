
const flecha = document.getElementById('flecha')
flecha.addEventListener('click', function() {
    window.scrollTo(0, 680);
})






window.addEventListener('scroll', function(){
    let animacion = document.getElementById('nosotros');
    let posicionOjb1 = animacion.getBoundingClientRect().top;
    console.log(posicionOjb1)
    let tamaniopantalla = window.innerHeight/2;
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
    console.log(posicionOjb1)
    let tamaniopantalla = window.innerHeight/2;
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
    console.log(posicionOjb1)
    let tamaniopantalla = window.innerHeight/2;
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
    console.log(posicionOjb1)
    let tamaniopantalla = window.innerHeight/2;
    if(posicionOjb1 < tamaniopantalla){
        animacion.classList.add('mover');
       
    }
    if(posicionOjb1 > tamaniopantalla){
       
        animacion.classList.remove('mover')
        
    }
})