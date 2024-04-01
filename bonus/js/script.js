const table = document.querySelector(".table"); // object | null
let vacancy = [2, 3, 9, 10, 16, 17, 23, 24, 29, 30, 31]; // creo arry con i giorni festivi
let stringTable = `<thead class= "green"> <th>Lunedì</th><th>Martedì</th><th>Mercoledì</th><th>Giovedì</th><th>Venerdì</th><th>Sabato</th><th>Domenica</th></thead><tr>`;
for (let i = -3; i <= 31; i++) { //creazione dei numeri del mese.
    let number = i;
    let myClassAdd = "blu"; // Imposto tutti i quadrati di colore blu.
    for (let y = 0; y < vacancy.length; y++) {
        if (vacancy[y] == i) {
            myClassAdd = "red"; // i giorni festivi li imposto colore rosso
        };

    }
    if (i < 1) {
        myClassAdd = "white"; // i giorni di febbraio li imposto bianchi
        number = "";
    }

    stringTable = stringTable + `<th class="${myClassAdd}">${number}</th>`;

    if (((i + 4) % 7) == 0) { // calcolo quando finisce la riga della colonna
        stringTable = stringTable + "</tr><tr>"
    }
    console.log(stringTable);
}
document.getElementById("table").innerHTML = stringTable; // stampo tutto a video
