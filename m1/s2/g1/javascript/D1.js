/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*let string= le stringhe sono sintassi di parole o lettere messe all unterno delle virgolette
in parole povere servono ad inserire un testo
es
let string="ciao"
number servono ad inserire numeri all interno e possono essere inseriti anche i decimali usando il .
es 
let number = 10 o let number=10.10
boolean =indicano solo se la funzione e vera o falsa
es
let x =0
bolean(x ==0) true
Null e un keyworld utiliazzata quanto  hai  l assenza intenzionale di un oggetto
es
let name =(nella verifica di console dara null)
Underfined appare quando il valore di una variabile non e assegnato o ben definito 
Array CONSENTE DI ASSOCIARE  PIU VALORI AD UN UNICO NOME DI VARIABILE 
es 
const PERSONA={
  nome:'andrea'
    cognome :'cruciani'
} 
PERSONA.nome= 'Raffaele*
console.log(PERSONA) 
SARA CAMBIATO DA ANDREA A RAFFAELE
Objet= contenitore di proprieta cioe elemeti caratterizzati da un nome e un valore /
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = 'andrea'
console.log(name)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/let somma1= 20
let somma2= 12
console.log(somma1+somma2)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/let X = 12
console.log(X)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/const NAME= 'andrea'
console.log(NAME)
/*let NAME='CRUCIANI'
console.log(NAME)*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let x=12
console.log(x-=4)



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/let name1,name2
{ name1='jonh'
 name2= 'Jonh'
console.log(name1!=name2)
console.log(name1==name2)
console.log(name1.toLowerCase() === name2.toLowerCase())
}
/* SCRIVI QUI LA TUA RISPOSTA */