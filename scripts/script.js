// Programmer: Md. Ashraful Haque
// Date: 03.08.2024

let generatedSecretKey = '';
let userEnteredPin = '';

const genKeyBtn = document.getElementById("genKeyBtn");
const genKeyDisplay = document.getElementById("genKeyDisplay");
const pinDisplay = document.getElementById("pinDisplay");

genKeyBtn.addEventListener('click', function(event){
    // generates a 6 digit random secret key
    generatedSecretKey = 100000 + Math.floor(Math.random()* 900000);
    genKeyDisplay.innerText = generatedSecretKey;
    // reset pin display and variable to enter newly generated code
    pinDisplay.innerText = "";
    userEnteredPin = "";
});