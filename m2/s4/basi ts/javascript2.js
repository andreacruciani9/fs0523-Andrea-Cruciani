function giocoNumeriRandom(giocatore1, giocatore2) {
      var numeroRandom = Math.floor(Math.random() * 100) + 1;
      var diffgiocarore1 = Math.abs(numeroRandom - giocatore1);
      var diffgiocarore2 = Math.abs(numeroRandom - giocatore2);
      if (giocatore1 === numeroRandom) {
            return "numero casuale generato= ".concat(
                  numeroRandom,
                  " il giocatore 1 ha indovinato"
            );
      } else if (giocatore2 === numeroRandom) {
            return "numero casuale generato= ".concat(
                  numeroRandom,
                  " il giocatore 2 ha indovinato"
            );
      } else if (diffgiocarore1 < diffgiocarore2) {
            return "Numero casuale generato = ".concat(
                  numeroRandom,
                  ". Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si \u00E8 avvicinato di pi\u00F9!"
            );
      } else if (diffgiocarore2 < diffgiocarore1) {
            return "Numero casuale generato = ".concat(
                  numeroRandom,
                  ". Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si \u00E8 avvicinato di pi\u00F9!"
            );
      } else {
            return "Numero casuale generato = ".concat(
                  numeroRandom,
                  ". Nessuno dei due ha azzeccato il numero casuale e entrambi si sono avvicinati allo stesso modo!"
            );
      }
}
var risultato = giocoNumeriRandom(5, 10);
console.log(risultato);
