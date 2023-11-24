interface ISim {
      carica: number;
      numeroChiamate: number;
      costoMinuto: number;
      chiamare: {}[];

      ricarica(euro: number): void;
      numero404(): string;
      getNumeroChiamate(): number;
      chiamata(min: number): void;
      azzeraChiamate(): void;
}

class Smarphone implements ISim {
      carica: number = 0;
      numeroChiamate: number = 0;
      costoMinuto: number = 0.2;
      chiamare: {}[] = [];

      ricarica(euro: number): void {
            this.carica += euro;
      }

      numero404(): string {
            return `il tuo credito residuo è  ${this.carica} € `;
      }
      getNumeroChiamate(): number {
            return this.numeroChiamate;
      }
      chiamata(min: number): void {
            let data: Date = new Date();

            let totale: number = this.costoMinuto * min;
            this.carica -= totale;
            this.numeroChiamate++;
            this.chiamare.push({
                  id: this.chiamare.length + 1,
                  durata: min,
                  dataOra: data,
            });
      }
      mostraChiamate(): void {
            for (let i = 0; i < this.chiamare.length; i++) {
                  console.log(this.chiamare[i]);
            }
      }

      azzeraChiamate(): void {
            this.numeroChiamate = 0;
      }
}

let smarphone1 = new Smarphone();
smarphone1.ricarica(10);
console.log(smarphone1.numero404());
console.log(smarphone1.getNumeroChiamate() + " " + "numero chiamate");
smarphone1.chiamata(20);
smarphone1.chiamata(30);
smarphone1.chiamata(40);
smarphone1.chiamata(20);
smarphone1.chiamata(30);
smarphone1.chiamata(60);
smarphone1.chiamata(50);

console.log(smarphone1.getNumeroChiamate() + " " + "numero chiamate");
smarphone1.mostraChiamate();
smarphone1.azzeraChiamate();

let smarphone2 = new Smarphone();
smarphone2.ricarica(15);
console.log(smarphone2.numero404());
console.log(smarphone2.getNumeroChiamate() + " " + "numero chiamate");
smarphone2.chiamata(25);
console.log(smarphone2.getNumeroChiamate() + " " + "numero chiamate");
smarphone2.mostraChiamate();

let smarphone3 = new Smarphone();
smarphone3.ricarica(20);
console.log(smarphone3.numero404());
console.log(smarphone3.getNumeroChiamate() + " " + "numero chiamate");
smarphone3.chiamata(40);
console.log(smarphone3.getNumeroChiamate() + " " + "numero chiamate");
smarphone3.mostraChiamate();
