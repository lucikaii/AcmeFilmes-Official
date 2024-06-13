import { deleteMovie, getMovies, getMovie, putMovie} from "./api_import.js"

const newMovieButton = document.getElementById('new-movie-button')
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

            console.log(idMovie)
           const response = await deleteMovie(idMovie)
           if(response){
            alert('Filme deletado com sucesso')
            window.location.href = '../pages/cms.html'
        } else{
            alert('Erro ao deletar')
        }
        })
        editButton.addEventListener('click', function (){

            console.log(movie);

            document.getElementById('popup').classList.remove('sumir')

            document.getElementById('movie-title').textContent = `${movie.nome}`
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

            document.getElementById('cancel-button').addEventListener('click', ()=>{
                window.location.href = '../pages/cms.html'
            })
            document.getElementById('save-button').addEventListener('click', async ()=>{

                let nomeInput = document.getElementById('nome').value
                let sinopseInput = document.getElementById('sinopse').value
                let duracaoInput = document.getElementById('duracao').value
                let datalanInput = document.getElementById('data_lancamento').value
                let datarelanInput = document.getElementById('data_relancamento').value 
                let valorInput = document.getElementById('valor').value
                let classificacaoInput = document.getElementById('classificacao').value
                let fotoInput = document.getElementById('foto_capa').value

                const movieJson = {
                    nome: nomeInput,
                    sinopse: sinopseInput,
                    duracao: duracaoInput,
                    data_lancamento: datalanInput,
                    data_relancamento: datarelanInput,
                    valor_unitario: valorInput,
                    classificacao: classificacaoInput,
                    foto_capa: fotoInput
                }

                const response = await putMovie(movieJson, idMovie)
                if(response){
                    alert('Filme atualizado com sucesso')
                    window.location.href = '../pages/cms.html'
                } else{
                    alert('Erro ao atualizar')
                }
            
            })
        })


    })


}

newMovieButton.addEventListener('click', ()=>{
    window.location.href = '../pages/create_movie.html'
})