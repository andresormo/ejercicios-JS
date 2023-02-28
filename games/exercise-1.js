let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

const divCard = document.querySelector('.b-grid')

function posicionamientoAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let arrayComprobacion = []
function click1Img(elemento, elementoObj) {
  elemento.addEventListener('click', () => {
    elemento.setAttribute('src', `${elementoObj.img}`)

  })
 
}



function pintarTablero(array) {

  for (const imagenes of array) {

    const img1 = document.createElement('img')

    divCard.appendChild(img1)
    img1.className = 'b-grid img'

    img1.setAttribute('src', 'public/exercise/universe.svg')
    img1.setAttribute('alt', 'Prueba')

    click1Img(img1, imagenes)
  }
}


pintarTablero(cardArray)

