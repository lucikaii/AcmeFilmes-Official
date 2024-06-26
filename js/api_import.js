'use strict'

// IMPORT MOVIES

export async function getMovies(){
    
    const url = 'https://acmefilmes-zhei.onrender.com/v1/acmefilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getMovie (id){

    const url = `https://acmefilmes-zhei.onrender.com/v1/acmefilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme

}
export async function getMovieByName(movieName){

    const url = `https://acmefilmes-zhei.onrender.com/v1/acmefilmes/filtro/filme?nome=${movieName}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function deleteMovie(id){

    const url = `https://acmefilmes-zhei.onrender.com/v2/acmefilmes/filme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

export async function setMovie(dadosMovie){
    
    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dadosMovie),

    }

    const response = await fetch (url, options)

    return response.ok
}

export async function putMovie(dadosMovie, idMovie){
    const url = `https://acmefilmes-zhei.onrender.com/v2/acmefilmes/update/filme/${idMovie}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dadosMovie),

    }

    const response = await fetch (url, options)

    return response.ok
}

// IMPORT MOVIE BY CLASSIFICATION 

export async function getMoviesByClassification(id){

    const url = `https://acmefilmes-zhei.onrender.com/v2/acmefilmes/filmes/classificacao/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
// IMPORT CLASSIFICATIONS

export async function getClassifications(){

    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// IMPORT GENDERS

export async function getGenders(){

    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/generos'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// IMPORT ACTORS

export async function getActors(){

    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/atores'
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// IMPORT DIRECTORS