
async function addFetch() {
    const callApi = await fetch('https://api.agify.io?name=michael')
    const drawApi = await callApi.json()
    return drawApi
}

const imprimirObj = await addFetch()

console.log(imprimirObj);