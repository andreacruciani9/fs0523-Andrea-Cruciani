console.log("come fare un html");
//commento  ad una sora riga
/*commento  ad una piu righe*/

// tipizazzione FORTE
let numero: number = 0;
let stringa: string = "hello world";
let boleano: boolean = true;
let array: string[] = ["hello", "world"];
let arraynumeri: number[] = [1, 2, 3, 4, 5, 6, 7];
let oggetto: { nome: string } = { nome: "Giuse" };

//BLOCCO interazione
let test: number | undefined;

if (true) {
      test = 0;
} else {
      test = 1;
}
console.log(test);
//tipicizzazione basata sulle classi
let now: Date = new Date();
//attenzione a non abusare
let variabile: any = 0;
variabile = [];
variabile = "ciao";
variabile = true;
variabile = new Date();
