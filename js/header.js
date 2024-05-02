import { getClassification } from './api_import.js'

document.addEventListener('DOMContentLoaded', () => {

    const classificationDropdown = document.getElementById('classification-dropdown')

    fillClassificationCard(classificationDropdown)
})

const fillClassificationCard = async function(classificationDropdown){

    const classifications = await getClassification()

    let ul = document.createElement('ul')
    ul.classList.add('dropdown')

    classifications.classificacoes.forEach( classification => {
    
    let li = document.createElement('li')
    ul.appendChild(li)
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.classList.add('classification')
    li.appendChild(a)
    let icon = document.createElement('img')
    icon.classList.add('classification-icon')
    icon.src = `${classification.icone}`
    icon.alt = `${classification.sigla}`
    let p = document.createElement('p')
    p.textContent = `${classification.descricao}`
    a.appendChild(icon)
    a.appendChild(p)

    classificationDropdown.appendChild(ul)

    })
}