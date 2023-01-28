const movies = [
{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225},
{name: "Origen", durationInMinutes: 165},
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214},
{name: "El jardin de las palabras", durationInMinutes: 40}
];


let moviesSmall = [];
let moviesMedium = []
let moviesXl = []
for (categoryForTime of movies){
    if (categoryForTime.durationInMinutes < 100){
        moviesSmall.push(categoryForTime.name) 
        console.log(moviesSmall)
    } else if (categoryForTime.durationInMinutes >= 100 && categoryForTime.durationInMinutes < 200){
        moviesMedium.push(categoryForTime.name)
        console.log(moviesMedium)
    } else if (categoryForTime.durationInMinutes >= 200) {
        moviesXl.push(categoryForTime.name)
        console.log(moviesXl)
    }
}