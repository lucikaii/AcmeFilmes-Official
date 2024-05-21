import { getMovie } from "./api_import.js"


const showPopUp = function(popup){
    popup.classList.add('show')
}


 export const showMoviePopup = async function(idFilme){

    const movie = getMovie(idFilme)

    let popup = document.createElement('div')
    popup.classList.add('popup')
    
    let popupGrid = document.createElement('div')
    popupGrid.classList.add('popup-grid')
    popup.appendChild(popupGrid)

    let popupBox = document.createElement('div')
    popupBox.classList.add('popup-box')
}