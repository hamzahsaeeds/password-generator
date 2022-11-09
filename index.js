const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1");
let pass2El = document.getElementById("pass2");

let isExclude = false;
let passwordLength = 15;


function generateRandomPassword() {
    let password = "";
    
    if (isExclude) {
        for (let i=0; i<passwordLength; i++) {
            let index = Math.floor(Math.random() * 52);
            password += characters[index];
        }
    } else {
        for (let i=0; i<passwordLength; i++) {
            let index = Math.floor(Math.random() * characters.length);
            password += characters[index];
        }
    }
    
    return password;
}

function generatePasswords() {
    let password1 = generateRandomPassword();
    let password2 = generateRandomPassword();
    
    pass1El.textContent = password1;
    pass2El.textContent = password2;
}

function copyPassword1() {
    navigator.clipboard.writeText(pass1El.textContent);
}
function copyPassword2() {
    navigator.clipboard.writeText(pass2El.textContent);
}

function excludeNosSyms() {
    let excludeEl = document.getElementById("exclude-el");

    if (excludeEl.checked == true){
        isExclude = true;
        console.log(isExclude);
    }
}

function setPasswordLength(length) {
    passwordLength = parseInt(length);
}