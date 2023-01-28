const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


function changeName (users){
    if(users.name[0] === 'A'){
        users.name = 'Anacleto'
    } 
    return users.name
}

let cambioNombre = users.map(changeName)

console.log(cambioNombre)