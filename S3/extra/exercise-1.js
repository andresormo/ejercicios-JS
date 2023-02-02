const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const body = document.querySelector('body')
const ul = document.createElement('ul')
body.appendChild(ul)

for (let i = 0; i < countries.length; i++) {
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = countries[i]
}