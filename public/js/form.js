const submitBtn = document.querySelector('.btn-submit');
const name = document.querySelector('#name');
const email = document.querySelector("#email");
const pasword = document.querySelector("#password");
const number = document.querySelector("#number");
const tnc = document.querySelector('#terms-cond');
const notifications = document.querySelector('#notifications')
const loader = document.querySelector('.loader');

submitBtn.addEventListener('click', () => {
    if(name.value.length <3){
        showAlert('Name must be atleast 3 letters long.');
    } else if(!validateEmail(email)){
        showAlert("Email is INVALID. Please Try again.");
    }else if(!validatePassword(password)){
        showAlert("Invalid password. Password must be at least 8 characters min, contain atleast 1 uppercase letter, 1 lowercase letter and 1 number");
    }else if(!validatePhoneNumber(number)){
        showAlert("Phone number must be in the following format:<br>XXX-XXX-XXXX <br> XXX.XXX.XXXX <br> XXX XXX XXXX")
    }else if(!tnc.checked){
        showAlert("You must agree to our terms and conditions")
    }else{
        //submit form
        loader.getElementsByClassName.display = 'block';

    }
})

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show')
    }, 3000);
}

const validateEmail = (email) =>{
let regex = new RegExp(
  /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
);
let result = regex.test(String(email.value));
//console.log(email);
//console.log(regex.test(String(email.value)));
return result;
      
}

const validatePassword = (password) =>{
    let regex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);

    let result = regex.test(String(password.value));
//console.log(result);
//console.log(password);
//console.log(password.value);
    return result;
}

const validatePhoneNumber = (number) => {
    let regex = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

    let result= regex.test(String(number.value));
//console.log(result);
//console.log(number);
//console.log(number.value);
    return result;
}