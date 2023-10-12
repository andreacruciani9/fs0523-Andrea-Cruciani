/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/*function area (l1,l2){
    return l1*l2
 } area(10,20) 
 let risultatoArea = area(10,20)
  console.log(risultatoArea)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
   /* function crazySum( a,b){
        
        
        if (a!=b){
            return a+b   
        }  
        else if (a=b){
            return (a+b)*3}
          
    } let somma=crazySum(5,5 )
        
    console.log( somma )
} 


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 /*function crazyDiff (a,b){
    return a-b}
    let valore_assoluto= crazyDiff(40-19)
   /* if( valore_assoluto>19){
        return ( 21 +3) 
    }
    console.log(valore_assoluto)*/ 
  
 
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/ /*function boundary (){
    let n=30
    if(n>20 && n<=100){
        console.log (n)
    }
    else if (n=400){
        console.log(n)
    }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

  /*  const epify =  fuction ( stringa) {
        if(stringa.startWhith('EPICODE')){
            return stringa
        }else{
            return 'epicode'+stringa}
        } 
       
     console.log(stringa)
    
    

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*//*function check3and7 (n1){
    if(n1>0(n%3===0&&n1%7===0)){
        return true
    }else{
        return false
    }
    
    }

console.log(check3and7(20))*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/function reverseString(stringa){
let p='nano'
if(stringa!=p){
 p.replace('nano','onan')
 console.log(p)

}}reverseString()

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
 function upperFirst(){
    d='ciao come stai';
   let oi= d.toUpperCase([0,5,10])
    console.log(oi)
 }upperFirst()
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/function cutString (){
    let a = 'stringa'
 let b= a.slice(1,-1)
    console.log(b)

}cutString()

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
