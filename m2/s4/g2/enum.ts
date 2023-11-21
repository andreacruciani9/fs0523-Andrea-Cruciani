enum tipoLibro {
      romanzo,
      saggio,
      fantasy,
      biografia,
}
console.log(tipoLibro);
console.log(tipoLibro.romanzo);

enum colori {
      red,
      blue,
      yellow,
}

console.log(colori); //in questo caso ai colori viene assegnato un valore ,numerico che si incrementa come quello degi arrey
console.log(colori.blue); //la lettura di un membro restituirà il suo indice
console.log(colori[0]); //vengono creati anche indici numerici per ogni membro,da cui e possibile accedere alle rispettive chiavi
