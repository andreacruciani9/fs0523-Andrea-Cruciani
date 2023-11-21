"use strict";
var tipoLibro;
(function (tipoLibro) {
    tipoLibro[tipoLibro["romanzo"] = 0] = "romanzo";
    tipoLibro[tipoLibro["saggio"] = 1] = "saggio";
    tipoLibro[tipoLibro["fantasy"] = 2] = "fantasy";
    tipoLibro[tipoLibro["biografia"] = 3] = "biografia";
})(tipoLibro || (tipoLibro = {}));
console.log(tipoLibro);
console.log(tipoLibro.romanzo);
var colori;
(function (colori) {
    colori[colori["red"] = 0] = "red";
    colori[colori["blue"] = 1] = "blue";
    colori[colori["yellow"] = 2] = "yellow";
})(colori || (colori = {}));
console.log(colori); //in questo caso ai colori viene assegnato un valore ,numerico che si incrementa come quello degi arrey
console.log(colori.blue); //la lettura di un membro restituirà il suo indice
console.log(colori[0]); //vengono creati anche indici numerici per ogni membro,da cui e possibile accedere alle rispettive chiavi
