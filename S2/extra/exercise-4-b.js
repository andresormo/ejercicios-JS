let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(animales, text) {
    for (let i = 0; i < animales.length; i++) {
     if(animales[i] === text){ return i
     }
    }
  }
function removeItem (findArrayIndex){
    return animales.splice(findArrayIndex,1)
}
const arrayIndex = removeItem(findArrayIndex(animales, 'Ajolote'))
console.log(arrayIndex)

