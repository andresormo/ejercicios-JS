const numbersList = [];

function sum(a,b){
return a + b
}

function substract(a,b){
return a - b
}

function father(a,b,callback){
return numbersList.push(callback(a,b))
}

father(1,2,sum)
father(2,6,substract)
father(32,4,substract)

console.log(numbersList);