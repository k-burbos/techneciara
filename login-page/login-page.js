const begin = document.getElementById('beginbttn')
const blackscreen = document.querySelector('.black-screen')
const alertscreen = document.querySelector('.alert-screen')
const understood = document.getElementById('understood-bttn')

begin.addEventListener('click', () => {
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    const confirm = document.getElementById('confirm').value

    if(name == '' || password == '' || confirm == '') alertUser()
    else if(password != confirm) alertFalsePassword()
    else {
        begin.classList.add('load')
        setTimeout(() => {
            window.location.href = "../welcome-page/welcome-page.html";
        }, 200); 
    }
})

function alertFalsePassword(){
    blackscreen.classList.add('show')
    alertscreen.querySelector('p').textContent = 'The passwords do not match.';
    alertscreen.classList.add('show')
}

function alertUser(){
    blackscreen.classList.add('show')
alertscreen.querySelector('p').textContent = 'Please fill in all of the information.';
    alertscreen.classList.add('show')
}

function unalertUser(){
    blackscreen.classList.remove('show')
    alertscreen.classList.remove('show')
}

understood.addEventListener('click', () => {
    unalertUser()
})