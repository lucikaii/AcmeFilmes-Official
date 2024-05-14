import { getMovies, getMoviesByClassification } from './api_import.js'
import { showMoviePopup } from './popup.js'

document.addEventListener('DOMContentLoaded', () =>{

    const main = document.getElementById('main')
    fillMovieCard(main)
})

const fillMovieCard = async function(main){

    const movies = await getMovies()

    movies.filmes.forEach(movie => {
        
        let movieCard = document.createElement('img')
        movieCard.classList.add('movie-card')
        movieCard.src = `${movie.foto_capa}`
        movieCard.alt = `${movie.nome}`
        let idFilme = movie.idFilme

        main.appendChild(movieCard)

        movieCard.addEventListener('click', alert('Filme: ' + movie.nome))
        showMoviePopup(idFilme)
    })
}

const fillMovieCardByClassification = async function(main, idClassification){

    const movies = await getMoviesByClassification(idClassification)

    movies.filmes.forEach(movie => {
        
        let movieCard = document.createElement('img')
        movieCard.classList.add('movie-card')
        movieCard.src = `${movie.foto_capa}`
        movieCard.alt = `${movie.nome}`
        let idFilme = movie.idFilme

        main.appendChild(movieCard)

        movieCard.addEventListener('click', alert('Filme: ' + movie.nome))
        showMoviePopup(idFilme)
    })
}