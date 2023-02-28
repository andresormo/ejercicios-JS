async function getCharacters() {
    const callFetch = await fetch('https://rickandmortyapi.com/api/character')
    const objetoApi = await callFetch.json()
    return objetoApi
}

getCharacters();