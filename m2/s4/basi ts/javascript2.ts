function giocoNumeriRandom(giocatore1: number, giocatore2: number) {
      const numeroRandom = Math.floor(Math.random() * 100) + 1;
      const diffgiocarore1 = Math.abs(numeroRandom - giocatore1);
      const diffgiocarore2 = Math.abs(numeroRandom - giocatore2);
      if (giocatore1 === numeroRandom) {
            return `numero casuale generato= ${numeroRandom} il giocatore 1 ha indovinato`;
      } else if (giocatore2 === numeroRandom) {
            return `numero casuale generato= ${numeroRandom} il giocatore 2 ha indovinato`;
      } else if (diffgiocarore1 < diffgiocarore2) {
            return `Numero casuale generato = ${numeroRandom}. Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!`;
      } else if (diffgiocarore2 < diffgiocarore1) {
            return `Numero casuale generato = ${numeroRandom}. Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!`;
      } else {
            return `Numero casuale generato = ${numeroRandom}. Nessuno dei due ha azzeccato il numero casuale e entrambi si sono avvicinati allo stesso modo!`;
      }
}
const risultato = giocoNumeriRandom(5, 10);
console.log(risultato);
