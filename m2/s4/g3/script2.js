"use strict";
/*Scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse
che dovranno sostenere i singoli lavoratori autonomi al fine di verificare
il reddito annuo netto di ognuno a secondo del proprio reddito annuo lordo, tasse,
cod redditività. Il programma utilizza classi astratte e non astratte.
Dati Proprietà:
codredd: number;
redditoannuolordo:number
 tasseinps:number
  tasseirpef:number
 Metodi:
 getUtileTasse:number
 getTasseInps:number
  getTasseIrpef:number */
// Classe astratta che definisce la struttura base per i lavoratori autonomi
{
    class LavoratoreAutonomo {
        constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
            this.codredd = codredd;
            this.redditoannuolordo = redditoannuolordo;
            this.tasseinps = tasseinps;
            this.tasseirpef = tasseirpef;
        }
        // Metodo per ottenere le tasse INPS
        getTasseInps() {
            return this.tasseinps;
        }
        // Metodo per ottenere le tasse IRPEF
        getTasseIrpef() {
            return this.tasseirpef;
        }
    }
    // Classe concreta che estende la classe astratta per gestire i lavoratori autonomi
    class Lavoratore extends LavoratoreAutonomo {
        constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
            super(codredd, redditoannuolordo, tasseinps, tasseirpef);
        }
        // Implementazione del calcolo dell'utilità delle tasse per il lavoratore
        getUtileTasse() {
            const tasseTotali = this.tasseinps + this.tasseirpef;
            return this.redditoannuolordo - tasseTotali;
        }
    }
    // Esempio di utilizzo delle classi
    const lavoratore1 = new Lavoratore(1, 50000, 10000, 15000);
    const lavoratore2 = new Lavoratore(2, 75000, 15000, 20000);
    console.log("Reddito netto lavoratore 1:", lavoratore1.getUtileTasse());
    console.log("Reddito netto lavoratore 2:", lavoratore2.getUtileTasse());
    console.log("Tasse INPS lavoratore 1:", lavoratore1.getTasseInps());
    console.log("Tasse IRPEF lavoratore 1:", lavoratore1.getTasseIrpef());
    console.log("Tasse INPS lavoratore 2:", lavoratore2.getTasseInps());
    console.log("Tasse IRPEF lavoratore 2:", lavoratore2.getTasseIrpef());
}
class CalcoloTassse {
    constructor(ReddAnnuo = 0, codRedd) {
        this.ReddAnnuo = ReddAnnuo;
        this.codRedd = codRedd;
        this.tasseirpef = 15;
        this.tasseinps = 24;
    }
}
class WebDeveloper extends CalcoloTassse {
    costractor(ReddAnnuo = 0) {
        super(ReddAnnuo, 78);
    }
    getUtileTasse() {
        return this.ReddAnnuo;
    }
    getTasseInps(...args) { }
    getTasseIrpef() { }
    getReddannuoNetto() {
        return (this.ReddAnnuo * this.codRedd) / 100;
    }
}
let mario = new WebDeveloper(55000);
