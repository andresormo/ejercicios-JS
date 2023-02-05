const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


const input$$ = document.querySelector('input')
const btn$$ = document.querySelector('button')

btn$$.addEventListener('click',()=>{
    const streamerFiltrado = streamers.filter((streamers)=>streamers.name.toLowerCase().includes(input$$.value))
    for(const streamer of streamerFiltrado){
        console.log(streamer.name);
    }
})