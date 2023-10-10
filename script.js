let emaiInput=document.querySelector('#mailid')
let checkButton=document.querySelector('#check')
let error=document.querySelector('.error')
let label=document.querySelector('.label')
let form=document.querySelector('form')
let body=document.querySelector('body')
let dismissButton=document.querySelector('.dismiss')
let subscriber=document.querySelector('#subscriber')


checkButton.addEventListener('click',()=>{
    const email=emaiInput.value
    if(isValidEmail(email))
    {
        emaiInput.style.borderColor='green'
        label.classList.remove('dis')
        emaiInput.style.backgroundColor='white'
        form.classList.remove('er')
        body.classList.add('true')
        body.classList.add('false')
        subscriber.innerHTML=email
    }
    else{
        form.classList.add('er')
        emaiInput.style.borderColor='red'
        emaiInput.style.backgroundColor='rgba(233, 137, 137, 0.5)'
        error.innerHTML='valid email required'
        label.classList.add('dis')
        console.log('f')
    }
})

function isValidEmail(mail)
{
    const regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(mail)
}

dismissButton.addEventListener('click',()=>{
    body.classList.remove('true')
    body.classList.remove('false')
    emaiInput.value=''
    emaiInput.style.borderColor='hsla(231, 7%, 60%, 0.349)'
})