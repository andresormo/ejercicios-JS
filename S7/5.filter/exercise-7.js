const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


const input$$ = document.querySelector('input')


input$$.addEventListener('input', () => {
    let streamerFiltrado = streamers.filter((streamers) => streamers.name.toLowerCase().includes(input$$.value))
    if(input$$.value !== ''){
        for (const filtrado of streamerFiltrado) {
            console.log(filtrado.name);
            console.log('-');
        }
    }
})


