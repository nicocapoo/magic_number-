let tentativi = 5;
let n = getRandom();
let inputElem = document.querySelector("#guess")
let indizio = document.querySelector('#indizio')
let button = document.querySelector('#guessbtn')
function getRandom(max = 100) {
    return Math.floor(Math.random() * max);
}

function gestisciClick() {
        if (tentativi <= 5) {
            numeroInserito = inputElem.value;
            if (isNaN(numeroInserito)) {
                return
            }
    
            if (numeroInserito == n) {
                console.log("Bravo, hai vinto.");
                return;
            } else if (numeroInserito < n) {
                indizio.innerHTML = "il numero inserito e troppo basso "
            } else {
                indizio.innerHTML = "il numero inserito e troppo alto "
            }
            tentativi --
            console.log(tentativi)
    }   
        
    if (tentativi === 0 && numeroInserito != n) {
        alert("Hai perso. Il numero da indovinare era: " + n);
    }

}

button.addEventListener("click", gestisciClick)