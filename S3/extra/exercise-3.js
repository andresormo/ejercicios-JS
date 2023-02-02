const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('div[data-function="printHere"]')
const ul = document.createElement('ul')
div.appendChild(ul)

for (let i = 0; i < cars.length; i++) {
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = cars[i]
}