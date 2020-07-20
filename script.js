// let str = '';
// document.getElementById('test').onkeypress = function(event) {

//     //console.log(event);
//     str = str + event.key;
//     console.log(str);

//     //console.log(String.fromCharCode());

//     this.value += String.fromCharCode(getRandomInt(65, 122));

//     return false;

//     //97-122  65-90  65-122

// }
let iconPass = document.getElementById('firstInput');
let pasValidation = document.getElementById('secondInput');
let pass = document.getElementById('inpPas');
let passValid = document.getElementById('pasValid');
let notification = document.createElement('span');

function showPass() {
    // let pass = document.getElementById('inpPas')
    if (pass.getAttribute('type') == 'password') {
        pass.classList.add('view');
        pass.setAttribute('type', 'text');
        iconPass.className = "fas fa-eye-slash icon-password"
    } else {
        pass.classList.remove('view');
        pass.setAttribute('type', 'password');
        iconPass.className = "fas fa-eye icon-password"
    }
};

function showPassValid() {
    // let passValid = document.getElementById('pasValid')
    if (passValid.getAttribute('type') == 'password') {
        passValid.classList.add('view');
        passValid.setAttribute('type', 'text');
        pasValidation.className = "fas fa-eye-slash icon-password"
    } else {
        passValid.classList.remove('view');
        passValid.setAttribute('type', 'password');
        pasValidation.className = "fas fa-eye icon-password"
    }
};

function validationPass(valueOne, valueTwo) {
    if (valueOne === valueTwo) {
        notification.remove();
        alert(`You are welcome`);
    } else {
        notification.innerHTML = `Please enter correct password`;
        document.querySelector("button").after(notification);
        notification.style.color = "red";

    }
}

iconPass.addEventListener("click", () => showPass());
pasValidation.addEventListener("click", () => showPassValid());

let button = document.getElementById("submitButton");
button.addEventListener("click", () => validationPass(pass.value, passValid.value), );