const movies = [
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    
    
]

let categoryMovies = []

for (const category of movies){
    for(const categoryStr of category.categories){
        if(!categoryMovies.includes(categoryStr)){
            categoryMovies.push(categoryStr)   
        }
    }
}    
console.log(categoryMovies)
