"use strict";
function giocoNumeriRandom(giocatore1, giocatore2) {
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    const diffgiocarore1 = Math.abs(numeroRandom - giocatore1);
    const diffgiocarore2 = Math.abs(numeroRandom - giocatore2);
    if (giocatore1 === numeroRandom) {
        return `numero casuale generato= ${numeroRandom} il giocatore 1 ha indovinato`;
    }
    else if (giocatore2 === numeroRandom) {
        return `numero casuale generato= ${numeroRandom} il giocatore 2 ha indovinato`;
    }
    else if (diffgiocarore1 < diffgiocarore2) {
        return `Numero casuale generato = ${numeroRandom}. Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!`;
    }
    else if (diffgiocarore2 < diffgiocarore1) {
        return `Numero casuale generato = ${numeroRandom}. Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!`;
    }
    else {
        return `Numero casuale generato = ${numeroRandom}. Nessuno dei due ha azzeccato il numero casuale e entrambi si sono avvicinati allo stesso modo!`;
    }
}
const risultato = giocoNumeriRandom(5, 10);
console.log(risultato);
console.log("come fare un html");
//commento  ad una sora riga
/*commento  ad una piu righe*/
// tipizazzione FORTE
let numero = 0;
let stringa = "hello world";
let boleano = true;
let array = ["hello", "world"];
let arraynumeri = [1, 2, 3, 4, 5, 6, 7];
let oggetto = { nome: "Giuse" };
//BLOCCO interazione
let test;
if (true) {
    test = 0;
}
else {
    test = 1;
}
console.log(test);
//tipicizzazione basata sulle classi
let now = new Date();
//attenzione a non abusare
let variabile = 0;
variabile = [];
variabile = "ciao";
variabile = true;
variabile = new Date();
