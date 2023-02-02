const body = document.querySelector('body')
const ul = document.createElement('ul')
body.appendChild(ul)

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let i = 0; i < apps.length; i++) {
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML += apps[i]
}