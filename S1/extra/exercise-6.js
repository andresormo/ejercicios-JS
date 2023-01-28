
const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

let goodProducts = [];
let badProducts = [];



for (sellCountMovies of products){
    if (sellCountMovies.sellCount < 20){
        badProducts.push(sellCountMovies.name)
    } else if ( sellCountMovies.sellCount > 20){
        goodProducts.push(sellCountMovies.name)
    }
}
console.log(badProducts)
console.log(goodProducts)