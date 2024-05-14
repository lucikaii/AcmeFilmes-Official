import { getClassifications, getGenders } from './api_import.js'

document.addEventListener('DOMContentLoaded', () => {

    const classificationDropdown = document.getElementById('classification-dropdown')
    const genderDropdown = document.getElementById('gender-dropdown')

    fillClassificationCard(classificationDropdown)
    fillGenderCard(genderDropdown)
})

const fillClassificationCard = async function(classificationDropdown){

    const classifications = await getClassifications()

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
    let idClassification = classification.id

    li.addEventListener('click', console.log(idClassification))

    classificationDropdown.appendChild(ul)

    })
}

const fillGenderCard = async function(genderDropdown){

    const genders = await getGenders()
    let ul = document.createElement('ul')
    ul.classList.add('dropdown-mega')

    genders.generos.forEach( gender =>{

        let li = document.createElement('li')
        ul.appendChild(li)
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.textContent = `${gender.nome}`
        li.appendChild(a)

        genderDropdown.appendChild(ul)
    })
}