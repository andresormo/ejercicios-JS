const cities = [{isVisited:true, name: 'Tokyo'}, 
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'}, 
{isVisited:false, name: 'Seul'}];



   

const ciudadesVisitadas1 = cities.map(function ciudadesVisitadas (cities)
{if (cities.isVisited == true)
    {cities.nuevoValor='si'}
    else{cities.nuevoValor='no'}
    return cities
})

console.log(ciudadesVisitadas1)