async function getApi(input) {
    const callFetch = await fetch(`https://api.nationalize.io?name=${input}`)
    const printApi = await callFetch.json()
    return printApi

}

const btn$$ = document.querySelector('button')
const input$$ = document.querySelector('input')
const body$$ = document.querySelector('body')



btn$$.addEventListener('click', async () => {
    const callApi = await getApi()
    console.log(callApi);
    for (const objetoApi of callApi.country) {
        const text$$ = document.createElement('p')
        text$$.innerHTML = `El nombre ${input$$.value} tiene un ${objetoApi.probability*100}% de ser de ${objetoApi.country_id}`
        body$$.appendChild(text$$)
    }
})