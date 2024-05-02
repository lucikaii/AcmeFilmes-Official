'use strict'

const signinButton = document.getElementById('signin-button')

const getUsers = async function(){

    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/usuarios'

    try {

        const response = await fetch(url)
        const users = await response.json()
        return users

    } catch (error) {

        alert('Ocorreu um erro ao entrar')
        return false
    }
}

const validateSignin = async function(){

    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('password').value

    let userStatus = false

    const users = await getUsers()

    console.log(users)

    users.usuarios.forEach(user => {
        
        if(emailInput === user.email && passwordInput === user.senha ){
            
            userStatus = true
            localStorage.setItem('idUser', user.id)

            if(user.adm == 0){


                window.location.href = '../pages/home.html'
            } else if (user.adm == 1){

                alert('usuario administrador')
            }
        }

    })

    if(!userStatus){
        alert('Credenciais inválidos')
    }
}

signinButton.addEventListener('click', validateSignin)