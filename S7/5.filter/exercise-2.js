
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numeroPar= ages.filter(function pares (array){if(array%2===0) return array})

console.log(numeroPar);