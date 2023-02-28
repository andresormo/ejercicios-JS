const input$$ = document.querySelector('#input')
const btn$$ = document.querySelector('#btn')

async function callFetch(input$$) {
    const callApi = await fetch('https://api.nationalize.io?name=')
    const printApi = await callApi.json()
    return printApi
}


btn$$.addEventListener('click', async () => {
    const valueApi = await callFetch(input$$.value)
    console.log(valueApi);
})

