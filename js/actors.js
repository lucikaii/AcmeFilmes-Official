import { getActors } from './api_import.js'

document.addEventListener('DOMContentLoaded', () =>{

    const main = document.getElementById('main')
    fillActorCard(main)
})

const fillActorCard = async function(main){

    const actors = await getActors()

    actors.atores.forEach( actor => {

        let actorCard = document.createElement('div')
        actorCard.classList.add('actor-card')
        
        let actorIcon = document.createElement('img')
        actorIcon.src = `${actor.foto_ator}`
        actorIcon.alt = `${actor.nome}`
        actorCard.appendChild(actorIcon)

        let actorName = document.createElement('h1')
        actorName.classList.add('actor-name')
        actorName.textContent = `${actor.nome}`
        actorCard.appendChild(actorName)

        main.appendChild(actorCard)
        
    })
}