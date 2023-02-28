const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

const foundMovie = movies.find(element =>element.date === 2010)
console.log(foundMovie.title);