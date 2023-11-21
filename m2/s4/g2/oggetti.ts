let newPizza2: {
      id: number;
      gusto: string;
      prezzo: number;
      disponibile: boolean;
} = {
      id: 4,
      gusto: "capricciosa",
      prezzo: 7,
      disponibile: true,
};
console.log(newPizza2.gusto);
//modalita piu semplice nella prima parte dico com'e fatto un oggetto nella seconda parte creo l oggetto in base alla tipizzazione
type newPizza2 = {
      id: number;
      gusto: string;
      prezzo: number;
      disponibile: boolean;
};
let newPizza3: newPizza2 = {
      id: 4,
      gusto: "capricciosa",
      prezzo: 7,
      disponibile: true,
};
