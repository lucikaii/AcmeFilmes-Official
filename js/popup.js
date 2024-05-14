import { getMovie } from "./api_import"

 export const showMoviePopup = async function(idFilme){

    const movie = getMovie(idFilme)

    let popup = document.createElement('div')
    popup.classList.add('popup')
}