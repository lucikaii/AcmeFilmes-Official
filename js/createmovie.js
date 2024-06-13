'use strict'

import { setMovie  } from '../js/api_import.js'
const saveButton = document.getElementById('save-button')
const cancelButton = document.getElementById('cancel-button')


const saveMovie = async function(){

    const nomeInput = document.getElementById('nome').value
    const sinopseInput = document.getElementById('sinopse').value
    const duracaoInput = document.getElementById('duracao').value
    const datalanInput = document.getElementById('datalan').value
    const datarelanInput = document.getElementById('datarelan').value
    const valorInput = document.getElementById('valor').value
    const classificacaoInput = document.getElementById('classification').value
    const fotocapaInput = document.getElementById('fotocapa').value

    const movieJson = {
        nome: nomeInput,
        sinopse: sinopseInput,
        duracao: duracaoInput,
        data_lancamento: datalanInput,
        data_relancamento: datarelanInput,
        valor_unitario: valorInput,
        classificacao: classificacaoInput,
        foto_capa: fotocapaInput
    }

    const response = await setMovie(movieJso)
    if(response){
        alert('Filme criado com sucesso')
        window.location.href = '../pages/cms.html'
    } else{
        alert('Erro ao criar')
    }

}

saveButton.addEventListener('click', saveMovie)
cancelButton.addEventListener('click', ()=>{
    window.location.href = '../pages/cms.html'
})