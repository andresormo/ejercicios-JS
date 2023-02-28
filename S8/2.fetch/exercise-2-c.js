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
    for (const objetoApi of callApi.country) {
        const div$$ = document.createElement('div')
        body$$.appendChild(div$$)

        const text$$ = document.createElement('p')
        text$$.innerHTML = `El nombre ${input$$.value} tiene un ${objetoApi.probability} de ser ${objetoApi.country_id}`
        div$$.appendChild(text$$)

        const deleteBtn$$ = document.createElement('button')
        deleteBtn$$.innerHTML = "X"
        div$$.appendChild(deleteBtn$$)

        deleteBtn$$.addEventListener('click', () => {
            body$$.removeChild(div$$)
        })
    }
})