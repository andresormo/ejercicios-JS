

function findArrayIndex(animales, text) {
  for (let i = 0; i < animales.length; i++) {
   if(animales[i] === text){
    return i
   }
  }
}

let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

console.log(findArrayIndex(animales,'Ajolote'))