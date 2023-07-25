const form = document.getElementById('validForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const errorMsg = document.getElementById('error');

email.addEventListener('input', () => {
    if(email.validity.valid) {
        errorMsg.textContent = ''
        errorMsg.className = "error"
    } else {
        showError(email);
    }
})

country.addEventListener('input', () => {
    if(country.validity.valid) {
        errorMsg.textContent = ''
        errorMsg.className = "error"
    } else {
        showError(country);
    }
})

zipcode.addEventListener('input', () => {
    if(zipcode.validity.valid) {
        errorMsg.textContent = ''
        errorMsg.className = "error"
    } else {
        showError(zipcode);
    }
})

password.addEventListener('input', () => {
    if(password.validity.valid) {
        errorMsg.textContent = ''
        errorMsg.className = "error"
    } else {
        showError(password);
    }
})

passwordConfirm.addEventListener('input', () => {
    if(passwordConfirm.validity.valid) {
        errorMsg.textContent = ''
        errorMsg.className = "error"
    } else {
        showError(passwordConfirm);
    }
})

function showError(type) {
    const checkType = type
    if(checkType.validity.typeMismatch) {
        errorMsg.textContent = 'Wrong type inputted'
        errorMsg.style.display = 'block'
    } else if(checkType.validity.valueMissing) {
        errorMsg.textContent = 'Need to enter something'
        errorMsg.style.display = 'block'
    } else if(checkType.validity.tooShort) {
        errorMsg.textContent = `Not enough characters.`
        errorMsg.style.display = 'block'
    }
    errorMsg.className = "error active"
}


form.addEventListener('submit', (event) => {
    const pwd = form.password.value;
    const confirm = form.passwordConfirm.value;
    if(pwd != confirm) {
        console.log('error')
        event.preventDefault();
        errorMsg.textContent = 'Passwords dont match'
        errorMsg.style.display = 'block'
        return true
    }
})
