import { deleteMovie, getMovies, getMovie} from "./api_import.js"

document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById('popup').classList.add('sumir')
    const movieTable = document.getElementById('movie-table')
    const body = document.querySelector('body')
    fillMovieCard(movieTable, body)
})

const fillMovieCard = async function(movieTable, body){

    const movies = await getMovies()

    movies.filmes.forEach(movie => {

        let idMovie = movie.id
        
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
        deleteButton.addEventListener('click', async () =>{
            deleteMovie(idMovie)
        })
        editButton.addEventListener('click', function (){

            console.log(movie);

            document.getElementById('popup').classList.remove('sumir')

            document.getElementById('nome').value = movie.nome
            document.getElementById('sinopse').value = movie.sinopse
            document.getElementById('duracao').value = movie.duracao.substring(11 , 19)
            document.getElementById('data_lancamento').value = movie.data_lancamento.substring(0 , 10)
            document.getElementById('data_relancamento').value = movie.data_relancamento
            document.getElementById('valor').value = movie.valor_unitario
            document.getElementById('classificacao').value = movie.classificacao
            document.getElementById('foto_capa').value = movie.foto_capa

            if(movie.data_relancamento == null){
                document.getElementById('data_relancamento').value = "não há data de relançamento"
            } else {
                document.getElementById('data_relancamento').value = movie.data_relancamento
            }

            document.getElementById('photo-movie').style.backgroundImage = `url(${movie.foto_capa})`
        })


    })


}