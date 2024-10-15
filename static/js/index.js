let tentativi = 0;
let n = 0;

function getRandom(max) {
    n = Math.floor(Math.random() * max);
    return n;
}

getRandom(100);

while (tentativi < 5) {
    let numeroInserito = prompt("Indovina il numero");
    while (numeroInserito === null || isNaN(numeroInserito)) {
        numeroInserito = prompt("Indovina il numero");
    }
    tentativi++;
    numeroInserito = parseInt(numeroInserito);

    if (numeroInserito == n) {
        console.log("Bravo, hai vinto.");
        break;
    } else if (numeroInserito < n) {
        alert("Il numero inserito è troppo basso. Numero inserito: " + numeroInserito, "ti rimangono" + tentativi, "tentativi");
    } else {
        alert("Il numero inserito è troppo alto. Numero inserito: " + numeroInserito, "ti rimangono" + tentativi, "tentativi");
    }
}

if (tentativi === 5 && numeroInserito != n) {
    alert("Hai perso. Il numero da indovinare era: " + n);
}
