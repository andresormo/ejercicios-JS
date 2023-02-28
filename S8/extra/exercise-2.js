async function addEliot() {
    const arrayEliot = []
    const callApi = await fetch('http://localhost:3000/diary')
    const getApi = await callApi.json()
    arrayEliot.push(getApi)

    const arrayOrdenado = arrayEliot[0].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return arrayOrdenado
}

const init = async () => {
    const citasEliot = await addEliot()
    drawCitas(citasEliot)
}

init()

const drawCitas = (array) => {
    const main$$ = document.createElement('main')
    document.body.appendChild(main$$)
    
    for (const citaEliot of array) {
        const div$$ = document.createElement('div')
        const h3$$ = document.createElement('h3')
        const h5$$ = document.createElement('h5')
        const p$$ = document.createElement('p')
        const btn$$ = document.createElement('button')

        h3$$.innerHTML = citaEliot.title
        h5$$.innerHTML = citaEliot.date
        p$$.innerHTML = citaEliot.description
        btn$$.innerText = "borrar cita"

        div$$.appendChild(h3$$)
        div$$.appendChild(h5$$)
        div$$.appendChild(p$$)
        div$$.appendChild(btn$$)
        main$$.appendChild(div$$)
        
        btn$$.addEventListener('click',()=>{
            main$$.removeChild(div$$)
        })
    }
}






