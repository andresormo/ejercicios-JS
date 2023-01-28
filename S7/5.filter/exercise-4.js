const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


 const newArray = streamers.filter(function ageandGame(array){return(array.age<30&&array.gameMorePlayed==='League of Legends')})
 console.log(newArray);