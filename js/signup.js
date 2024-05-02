'use strict'

const signupButton = document.getElementById('signup-button')

const userSignup = async function(){

    const nameInput = document.getElementById('name').value
    const emailInput = document.getElementById('email').value 
    const passwordInput = document.getElementById('password').value
    const confirmPasswordInput = document.getElementById('confirm-password').value

    if(nameInput === '' || emailInput === '' || passwordInput === '' || confirmPasswordInput === ''){
        alert('Preencha os campos corretamente')
        return null
    } if(confirmPasswordInput != passwordInput){
        alert('Preencha a senha corretamente')
    } else{

        try {

            const _data = {
                nome: nameInput,
                email: emailInput,
                senha: passwordInput
            }

            const _url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/usuario'

            const _options = {
                method: 'post',
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json" },
                mode: 'cors',
                redirect: 'follow',
                cache: 'default'
            }

            fetch(_url, _options)
            
            showToast()
            
            
        } catch (error) {
            alert('Erro ao cadastrar: ' + error.message)
        }
    }
}


signupButton.addEventListener('click', userSignup)

// Toast


const showbutton = document.getElementById('show')
const closebutton = document.getElementById('close')
let x
let toast = document.getElementById('toast')

const showToast = function(){
    clearTimeout(x)
    toast.style.transform = "translateX(0)"
    x = setTimeout(() =>{
        toast.style.transform = "translateX(400px)"
    }, 3000)
}
const closeToast = function(){
    toast.style.transform = "translateX(400px)"
}


showbutton.addEventListener('click', showToast)
closebutton.addEventListener('click', closeToast)