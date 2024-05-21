import { deleteMovie, getMovies} from "./api_import.js"

document.addEventListener('DOMContentLoaded', () =>{

    const movieTable = document.getElementById('movie-table')
    fillMovieCard(movieTable)
})

const fillMovieCard = async function(movieTable){

    const movies = await getMovies()

    movies.filmes.forEach(movie => {
        
        let movieCard = document.createElement('div')
        movieCard.classList.add('cms-movie-card')

        let movieInfo = document.createElement('div')
        movieInfo.classList.add('movie-info')
        movieCard.appendChild(movieInfo)

        let movieImg = document.createElement('img')
        movieImg.src = `${movie.foto_capa}`
        movieImg.alt = `${movie.nome}`
        movieInfo.appendChild(movieImg)

        let movieTitle = document.createElement('span')
        movieTitle.textContent = `${movie.nome}`
        movieInfo.appendChild(movieTitle)

        let buttonSide = document.createElement('div')
        buttonSide.classList.add('button-side')

        let editButton = document.createElement('button')
        let deleteButton = document.createElement('button')
        editButton.classList.add('edit-button')
        deleteButton.classList.add('delete-button')

        let editIcon = document.createElement('i')
        let deleteIcon = document.createElement('i')
        editIcon.classList.add('bi', 'bi-pen')
        deleteIcon.classList.add('bi', 'bi-trash')
        
        editButton.appendChild(editIcon)
        deleteButton.appendChild(deleteIcon)
        buttonSide.appendChild(editButton)
        buttonSide.appendChild(deleteButton)
        movieCard.appendChild(buttonSide)

        movieTable.appendChild(movieCard)
        deleteButton.addEventListener('click', () =>{
            deleteMovie(movie.id)
        })


    })


}