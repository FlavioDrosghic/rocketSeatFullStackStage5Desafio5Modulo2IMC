import {modal} from './modal.js'
import {alertError} from './alert-error.js'
import {notANumber, IMC} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event){

    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError) {
        console.log('mostras alerta e erro')
        alertError.open()
        return;
    } 

    alertError.close()

    const result = IMC (weight, height)
    const message = `Seu IMC é de ${result}` 

    modal.message.innerText = message
    modal.open()

} 

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()