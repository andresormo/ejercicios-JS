const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];



 const arrayNew= streamers.filter(function leyendas (array){
    if(array.gameMorePlayed.includes('Legends')){
    if(array.age > 35){ array.gameMorePlayed = array.gameMorePlayed.toLocaleUpperCase()}
    return array}})
 console.log(arrayNew);

