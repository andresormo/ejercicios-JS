const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

for (let edad of users) {
    if (edad.years < 18){
        console.log(edad.name, "Usuario menor de edad")
    } else{
        console.log(edad.name, "Usuario mayor de edad")
    }
    
}