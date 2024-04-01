const check = document.getElementById("check"); // Richiamo il pulsante lancia i dati 
const reset = document.getElementById("reset"); // Richiamo il pulsante reset 
const insertName = document.getElementById("insertName"); // Richiamo il pulsante inserisci nome
let userName = "Utente anonimo" // Imposto nome anonimo
document.getElementById("dado-nome-utente").innerHTML = "Questo è il dado di " + userName; // Imposto nome di partenza
insertName.addEventListener("click", function () {
    userName = document.getElementById("name").value // leggo il nome inserito dall'utente
    document.getElementById("dado-nome-utente").innerHTML = "Questo è il dado di " + userName; // imposto nome inserito
})
document.getElementById("dado-utente").innerHTML = `<div class="m-3 dado-1 "></div> `;// imposto dado uno per la partenza
document.getElementById("dado-pc").innerHTML = `<div class="m-3 dado-1 "></div> `; // imposto dado uno per la partenza
check.addEventListener("click", function () {
    document.getElementById("result").innerHTML = ""; // elimino eventuale risultato precedente
    let numUser = 0;
    let percentualeUser = 0;
    let stringUser = "";
    for (let i = 1; i <= 20; i++) { //genero 20 numeri casuali per creare l'animazione dei datd, l'ultimo numero casuale sarà anche quello dell'utente
        numUser = Math.floor((Math.random() * 6) + 1); //genero un numero da 1 a 6
        percentualeUser = i * 5;  // stabilisco la percentuale dell'animazione
        stringUser += ` ${percentualeUser}% {background-image: url("./img/${numUser}.png")}`; // concateno tutte le stringhe generate creando la base dell'animazione

    }
    stringUser = `<style> @keyframes randomutente { ${stringUser} }  </style> <div class="m-3 dado-${numUser} "></div> `; // aggiungo alla stringa l'animazione più il div contenente il dado finale
    document.getElementById("dado-utente").innerHTML = stringUser; // stampo l'animazione a video

    let numPc = 0;
    let percentualePc = 0;
    let stringPc = "";
    for (let i = 1; i <= 20; i++) { //genero 20 numeri casuali per creare l'animazione dei datd, l'ultimo numero casuale sarà anche quello del pc
        numPc = Math.floor((Math.random() * 6) + 1); //genero un numero da 1 a 6
        percentualePc = i * 5; // stabilisco la percentuale dell'animazione
        stringPc += ` ${percentualePc}% {background-image: url("./img/${numPc}.png")}`; // concateno tutte le stringhe generate creando la base dell'animazione

    }
    stringPc = `<style> @keyframes randomutente { ${stringPc} }  </style> <div class="m-3 dado-${numPc} "></div> `; // aggiungo alla stringa l'animazione più il div contenente il dado finale
    document.getElementById("dado-pc").innerHTML = stringPc; // stampo l'animazione a video
    setTimeout(function () { // imposto un ritardo sul controllo del vincitore in modo da stampare a video il risultato solo a fine animazione
        if (numPc > numUser) {  // verifico se ha vinto il pc
            document.getElementById("result").innerHTML = `<div class="alert alert-danger text-center" role="alert"> Mi dispiace ${userName} hai perso, riprova!</div>`;  // stampo a video il risultato
        } else if (numPc < numUser) { // verifico se ha vinto l'utente
            document.getElementById("result").innerHTML = `<div class="alert alert-success text-center" role="alert"> Complimenti ${userName} hai vinto!!! </div>`;// stampo a video il risultato
        } else { // come ultima possibilità resta il pareggio
            document.getElementById("result").innerHTML = `<div class="alert alert-warning text-center" role="alert"> ${userName} questa volta è andata male ad entrambi, riprova! </div>`;// stampo a video il risultato
        }
    }, 6000);
})
reset.addEventListener("click", function () { // in caso l'utente clicca il pulsante reset resetto la pagina

    document.getElementById("result").innerHTML = "";
    document.getElementById("dado-utente").innerHTML = `<div class="m-3 dado-1 "></div> `;// imposto dado uno per la partenza
    document.getElementById("dado-pc").innerHTML = `<div class="m-3 dado-1 "></div> `; // imposto datd uno per la partenza
    document.getElementById("dado-nome-utente").innerHTML = "Questo è il dado di Utente anonimo"; // Iposto nome anonimo di partenza
    userName = "Utente anonimo";
})
