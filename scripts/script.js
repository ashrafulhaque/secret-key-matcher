// Programmer: Md. Ashraful Haque
// Date: 03.08.2024

let generatedSecretKey = '';
let userEnteredPin = '';

const genKeyBtn = document.getElementById("genKeyBtn");
const genKeyDisplay = document.getElementById("genKeyDisplay");
const pinDisplay = document.getElementById("pinDisplay");

// generating new key and reseting the pin display
genKeyBtn.addEventListener('click', function(event){
    // generates a 6 digit random secret key
    generatedSecretKey = 100000 + Math.floor(Math.random()* 900000);
    generatedSecretKey = generatedSecretKey.toString();
    genKeyDisplay.innerText = generatedSecretKey;
    // reset pin display and variable to enter newly generated code
    pinDisplay.innerText = "";
    userEnteredPin = "";
});

const keyBoard = document.getElementById("keyBoard");

// updating the pin display by event delegation
keyBoard.addEventListener('click', function(event){
    const elementClicked = event.target;
    if(elementClicked.tagName === 'BUTTON'){
        if(elementClicked.classList.contains('num')){
            if (userEnteredPin.length < 6) {
                userEnteredPin += elementClicked.innerText;
                pinDisplay.innerText = userEnteredPin;
            }
        }
    }
});

const backspaceBtn = document.getElementById("backspaceBtn");
// implementing backspace button
backspaceBtn.addEventListener('click', function(event){
    userEnteredPin = userEnteredPin.slice(0, -1);
    pinDisplay.innerText = userEnteredPin;
});



const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
// matching the secret key with the user entered pin
submitBtn.addEventListener('click', function(event){

    if(userEnteredPin === '' || generatedSecretKey === '')
        return;
    else if(generatedSecretKey === userEnteredPin){
        message.textContent = '✅ Congratulations, PIN Matched With The Secret Key!';
        message.style.color = '#00D26A';
    } else {
        message.textContent = '❌ Sorry, PIN Does Not Match With The Secret Key!';
        message.style.color = '#F44336';
    }
});

const clearBtn = document.getElementById("clearBtn");
// implementing the clear button
clearBtn.addEventListener('click', function(event){
    userEnteredPin = '';
    pinDisplay.innerText = '';
    message.innerText = '';
});