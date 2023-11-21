"use strict";
let pizze = [
    {
        id: 1,
        gusto: "margerita",
        prezzo: 1,
        disponibile: true,
    },
    {
        id: 2,
        gusto: "diavola",
        prezzo: 1,
        disponibile: false,
    },
    {
        id: 3,
        gusto: "hawayana",
        prezzo: 150,
        disponibile: false,
    },
];
let newpizza = {
    id: 4,
    gusto: "capricciosa",
    prezzo: 7,
    disponibile: true,
};
/*function eliminaPizza() {
      //aggiungo la nuova pizza alla lista
      pizze.push(newpizza);

      //rimuovoda un arrey
      let index = pizze.findIndex((p) => p.id === 3);
      let indexByName = pizze.findIndex((p) => p.gusto == "hawayana"); //in questi due caso trovo l'indice
      //per rimuovere poi
      pizze.splice(indexByName, 1); //
}
eliminaPizza();*/
// secondo metodo
/*function eliminaPizza2() {
      pizze = pizze.filter((p) => p.gusto != "hawayana");
}
eliminaPizza2();
console.log(pizze);*/
//aggiornare
let indexByName = pizze.findIndex((p) => p.gusto == "hawayana"); //in questi due caso trovo l'indice
let newpizza2 = {
    id: 3,
    gusto: "hawayana",
    prezzo: 300,
    disponibile: false,
};
pizze.splice(indexByName, 1, newpizza2);
console.log(pizze);
function aggiornarePizza2() {
    pizze = pizze.map((p) => {
        //mi restituisce un arrey contenete tutte le sue variabili modificate
        if (p.id == 2)
            p.disponibile = true;
        return;
    });
}
aggiornarePizza2();
console.log(pizze);
