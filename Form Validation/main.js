function nameValidation() {
    let name = document.getElementById('nameInput').value
    let text = document.getElementById('nameText')
    let pattern = /^([a-zA-Z\s]+)?$/
    if(name.match(pattern)) {
        text.innerText = 'Entered Name is Correct'
        text.classList.add('valid')
        text.classList.remove('invalid')
        text.classList.remove('blank')
    }
    else {
        text.innerText = 'Your Name is not valid'
        text.classList.remove('valid')
        text.classList.remove('blank')
        text.classList.add('invalid')
    }
    if(name.match(blnkPattern)) {
        text.innerText = 'Name Field cannot blank'
        text.classList.remove('valid')
        text.classList.remove('invalid')
        text.classList.add('blank')
        // console.log('blank')
    }

}

function validation() {
    let email = document.getElementById('email').value 
    let text = document.getElementById('emailText')
    const pattern = /^([a-zA-Z0-9\._]+)@gmail.com?$/
    if(email.match(pattern)) {
        text.innerText = 'Email is valid'
        text.classList.remove('invalid') 
        text.classList.add('valid') 
        text.classList.remove('blank') 
        // console.log('match')
    }
    else {
        text.innerText = 'Email Address not valid'
        text.classList.add('invalid')
        text.classList.remove('valid')
        text.classList.remove('blank')
        // console.log("no match")
    }
    if(email.match(blnkPattern)) {
        text.innerText = 'Email Address Field cannot blank'
        text.classList.remove('valid')
        text.classList.remove('invalid')
        text.classList.add('blank')
        // console.log('blank')
    }
}

function userValidation() {
    let user = document.getElementById('userInput').value
    let text = document.getElementById('userText')
    let pattern = /^([a-zA-Z0-9]+)?$/
    if(user.match(pattern)) {
        text.innerText = 'Username is match'
        text.classList.add('valid')
        text.classList.remove('invalid')
        text.classList.remove('blank')
    }
    else if(user.match(blnkPattern)) {
        text.innerText = 'Username Field cannot be Blank'
        text.classList.add('blank')
        text.classList.remove('valid')
        text.classList.remove('invalid')
    }
    else {
        text.innerText = 'Username is not match'
        text.classList.remove('valid')
        text.classList.add('invalid')
        text.classList.remove('blank')
    }
}

function passValidation() {
    pass = document.getElementById('passInput').value
    let text = document.getElementById('passText')
    let pattern = /^([a-zA-Z0-9])+([@$&])?$/
    if(pass.match(blnkPattern)) {
        text.innerText = 'Password field Never be Blank'
        text.classList.remove('valid')
        text.classList.remove('invalid')
        text.classList.add('blank')
    }
    else if(pass.length > 8) {
        if(pass.match(pattern)) {
            text.innerText = 'Password is Oll Korrect'
            text.classList.add('valid')
            text.classList.remove('invalid')
            text.classList.remove('blank')
        }
        else {
            text.innerText = 'Password contains something wrong'
            text.classList.remove('valid')
            text.classList.add('invalid')
            text.classList.remove('blank')    
        }
    }
    else {
        text.innerText = 'Password is less then 8 characters'
        text.classList.remove('valid')
        text.classList.add('invalid')
        text.classList.remove('blank')    
    }
}
function cnfValidation() {
    let cnf = document.getElementById('cnfInput').value
    let text = document.getElementById('cnfText')
    if(pass == cnf) {
        if(pass.match(blnkPattern)) {
            text.innerText = 'Confirm Password Field cannot be Blank'
            text.classList.add('blank')
            text.classList.remove('valid')
            text.classList.remove('invalid')    
        }
        else {
            text.innerText = 'Password Matches :)'
            text.classList.add('valid')
            text.classList.remove('invalid')
            text.classList.remove('blank')
        }
    }
    else {
        text.innerText = 'Passwords did not Match :('
        text.classList.remove('valid')
        text.classList.add('invalid')
        text.classList.remove('blank')
    }
}


let pass
let blnkPattern = /^([\s]+)?$/