const countries = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }];


const btn = document.querySelector('button')
const body = document.querySelector('body')
const ul = document.createElement('ul')
body.appendChild(ul)

btn.addEventListener('click', () => {
    ul.removeChild(ul.lastChild)
})

for (const countrie of countries) {
    const li = document.createElement('li')
    const div = document.createElement('div')
    ul.appendChild(li)
    li.appendChild(div)
    div.innerHTML = `<h4>${countrie.title}</h4><img src="${countrie.imgUrl}">`
}