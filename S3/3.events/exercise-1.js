const btn = document.getElementById('btnToClick')
btn.innerHTML ="Click me"
btn.addEventListener('click',()=>{
    console.log('boton pulsado');
})