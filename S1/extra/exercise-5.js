const products = [{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

let sellCount = 0;
let  mediaSellCount  = 0;

for (sellCountTotal of products){
    sellCount += sellCountTotal.sellCount
    mediaSellCount = sellCount / products.length;
}
console.log(mediaSellCount)