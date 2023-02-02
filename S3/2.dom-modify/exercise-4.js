const body = document.querySelector('body')
const parrafo = document.createElement('p')

body.appendChild(parrafo)
parrafo.innerText = "Soy dinámico"


body.innerHTML += `<p>Soy dinámico</p>`