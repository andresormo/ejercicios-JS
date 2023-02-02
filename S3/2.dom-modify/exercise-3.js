const body = document.querySelector('body')
const div = document.createElement('div')


body.appendChild(div)

for (let i = 0; i < 6; i++) {
    const parrafos = document.createElement('p')
    div.appendChild(parrafos)
}
