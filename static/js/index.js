let tentativi = 5;
let n = getRandom();
let inputElem = document.querySelector("#guess")
let indizio = document.querySelector('#indizio')
let button = document.querySelector('#guessbtn')
let testoTentativi = document.querySelector("#tentativi")
function getRandom(max = 100) {
    return Math.floor(Math.random() * max);
}

function gestisciClick() {
        if (tentativi <= 5 && tentativi > 0) {
            numeroInserito = inputElem.value;
            if (isNaN(numeroInserito)) {
                return
            }
    
            if (numeroInserito == n) {
                indizio.innerHTML = "bravo hai vinto! "
                return;
            } else if (numeroInserito < n) {
                indizio.innerHTML = "numero troppo basso! "
            } else {
                indizio.innerHTML = "numero troppo alto! "
            }
            tentativi --
            testoTentativi.innerHTML = "tentativi rimasti :" + tentativi
    }   
        
    if (tentativi === 0 && numeroInserito != n) {
        indizio.innerHTML = "Hai perso. Il numero da indovinare era: " + n;
    }

}

button.addEventListener("click", gestisciClick)