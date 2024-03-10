const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls ={
    episodes,
    characters:{
        base: characters,
        byId:(id)=> `${characters}/${id}`
    }
}

export {
    baseURL,
    urls
}