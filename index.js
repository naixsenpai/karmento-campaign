const rest = document.getElementById('rest');

const btn = document.getElementById('btn');

const mobile = document.getElementById('mobile');
const name = document.getElementById('name');
const family = document.getElementById('family');
const email = document.getElementById('email');

const validate = {
    mobile: false,
    name: false,
    family: false,
    email: false
}

const mobileRGX = /^[0][9][0-9]{9,9}$/;
const emailRGX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;

mobile.addEventListener('input', (event) => {
    if (mobileRGX.test(event.target.value)) {
        rest.classList.add('rest-visible')
        mobile.classList.add("form-input-true")
        mobile.classList.remove('form-input-false');
        validate.mobile = true;
        validateFunction()
    } else {
        mobile.classList.remove("form-input-true")
        mobile.classList.add('form-input-false');
        validate.mobile = false;
        validateFunction()
    }
})

email.addEventListener('input', (event) => {
    if (emailRGX.test(event.target.value)) {
        email.classList.add("form-input-true")
        email.classList.remove("form-input-false")
        validate.email = true;
        validateFunction()
    } else {
        email.classList.remove("form-input-true")
        email.classList.add("form-input-false")
        validate.email = false;
        validateFunction()
    }
})

name.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        name.classList.add("form-input-true")
        name.classList.remove("form-input-false")
        validate.name = true;
        validateFunction()
    } else {
        name.classList.add("form-input-false")
        name.classList.remove("form-input-add")
        validate.name = false;
        validateFunction()
    }
})

family.addEventListener('input', (event) => {
    if (event.target.value.length > 0) {
        family.classList.add("form-input-true")
        family.classList.remove("form-input-false")
        validate.family = true;
        validateFunction()
    } else {
        family.classList.add("form-input-false")
        family.classList.remove("form-input-true")
        validate.family = false;
        validateFunction()
    }
})

const validateFunction = () => {
    if (validate.family === true && validate.mobile === true && validate.name === true) {
        btn.disabled = false;
        btn.classList.add('form-btn-enbaled');
        btn.classList.remove('form-btn-disabled');
    } else {
        btn.disabled = true;
        btn.classList.remove('form-btn-enbaled');
        btn.classList.add('form-btn-disabled');
    }
}

setTimeout(function(){
    document.getElementById('section-first').remove();
},6000);