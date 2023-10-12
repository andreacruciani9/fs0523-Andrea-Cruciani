/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/let x =10
 if(x>!9){
  console.log(maggiore)
 }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/{
  let numero=25
  if(numero%5){
//let risultato=(25%5) abbreviazionema non e corretto
console.log('divisibileper 5')}
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/{
function compare(a,b){
  if(a===8||b===8||a+b===8||a-b===8){
    return true;
  }else{
    return false;
  }
}
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
// let totalShoppingCart= 100
 //a=totalShoppingCart
 //let b=50
 //function checkout( a,b){
  //if(a>b){
    //document.write('spedizione gratuita')
  //console.log('spedizione gratuita')
  //}
 //}
 
 
  //function (carello){ 
  //totalShoppingCart:100}
  let totalShoppingCart=65
  let spedizione =10
  let totale= totalShoppingCart
  if( totalShoppingCart>50){
    console.log('totale da pagare'+totalShoppingCart)
  }else{
    console.log( totalShoppingCart+10)
  }


/*if(totalShoppingCart>50)
document.write( 'spedizione gratuita')
else if (totalShoppingCart<50)
document.write(' costo spedizione 10')

console.log(carello>50)*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2=65
 totalShoppingCart2=totalShoppingCart2*0.8
  let shipping=10
  let total =totalShoppingCart2
if(totalShoppingCart2>50){
  console.log('spedizione gratuita')

}else{ console.log ('spedizione a pagamento' +'  '+ shipping)}

/* SCRIVI QUI LA TUA RISPOSTA */console.log( 'totale da pagare'+'  '+totalShoppingCart2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/let ab =3
  let cd=6
  let ef=9
  if(ab<cd&&cd<ef){
    console.log(ab,cd,ef)
  }
  

  
  



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/let lettera ='andrea'
if(typeof lettera===Number){
  console.log('lettera e un numero')

}
else {console.log('lettera e una parola') }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/ let numero=10
 risultato= 10%2
 console.log(risultato)
 if(risultato>0){console.log ('dispari')}
 else{ console.log ('pari')}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
  me.city="toronto"
  console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills
console.log(me.skills)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/let numeri=[]
  numeri.push(1,2,3,4,5,6,7,8,9,10)
  console.log(numeri)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/numeri[9]=100
console.log(numeri)

/* SCRIVI QUI LA TUA RISPOSTA */
