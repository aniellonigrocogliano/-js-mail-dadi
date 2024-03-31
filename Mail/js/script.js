const check = document.getElementById("check"); // Richiamo il pulsante controlla
const reset = document.getElementById("reset"); // Richiamo il pulsante reset 

const listEmail = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com", "email6@gmail.com", "email7@gmail.com", "email8@gmail.com", "email9@gmail.com", "email10@gmail.com", "email11@gmail.com", "email12@gmail.com", "email13@gmail.com", "email14@gmail.com", "email15@gmail.com", "email16@gmail.com", "email17@gmail.com", "email18@gmail.com", "email19@gmail.com", "email20@gmail.com", "email21@gmail.com", "email22@gmail.com", "email23@gmail.com", "email24@gmail.com", "email25@gmail.com",]; //creo un array di email
check.addEventListener("click", function () {
    let flag = false; // imposto la variabile di controllo su falso
    const email = document.getElementById("email").value;
    console.log(email);
    if (email.indexOf("@") != -1) { //verifico se l'utente ha immesso realmente un email verificando se nella stringa è presente il carattere @
        for (let i = 0; i < listEmail.length; i++) { //scorro l'intero array
            if (listEmail[i] == email) { // In caso l'email è presente cambio lo stato di flag da falso a vero
                flag = true;
            }
        }
        if (flag == true) {
            document.getElementById("result").innerHTML = `<div class="alert alert-success text-center" role="alert"> La tua email è presente nella lista! </div>`; // se l'email è presente stampo a video l'esito positivo
        } else {
            document.getElementById("result").innerHTML = `<div class="alert alert-danger text-center" role="alert"> La tua email non è presente nella lista! </div>`; // se l'email non è presente stampo a video l'esito negativo
        }
    } else {
        alert("Non hai inserito un indirizzo email valido") // in caso l'utente non abbia inserito un email resetto la pagina e lo avviso che non ha inserito un email valida
        document.getElementById("email").value = "";
        document.getElementById("result").innerHTML = "";
    }
})
reset.addEventListener("click", function () { // in caso l'utente clicca il pulsante reset resetto la pagina

    document.getElementById("email").value = "";
    document.getElementById("result").innerHTML = "";
})

