import { getMovies } from './api_import.js'

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
    })
}