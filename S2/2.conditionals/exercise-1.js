const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(const alumnosAprovados of alumns){
    if(alumnosAprovados.T1 === true && alumnosAprovados.T2 === true){
      alumnosAprovados.isApproved = true
    } else if (alumnosAprovados.T1 === true && alumnosAprovados.T3 === true){
        alumnosAprovados.isApproved = true
    } else if (alumnosAprovados.T2 === true && alumnosAprovados.T3 === true){
        alumnosAprovados.isApproved = true
    } else {
        alumnosAprovados.isApproved = false
    }
}
console.log(alumns)