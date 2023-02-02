const divsContainer = document.querySelectorAll('.fn-insert-here')

for(const div of divsContainer){
    div.innerHTML = `<p>Voy dentro!</p>`
}