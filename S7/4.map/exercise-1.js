const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


function devuelveNombre(users){
  return users.name
}

let nombrePersonas = users.map(devuelveNombre)

console.log(nombrePersonas)