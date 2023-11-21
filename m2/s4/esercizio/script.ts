/*class SonAccount {
      constructor() {
            this.balanceInit = 0; // Saldo iniziale
      }

      // Versamento nel conto
      oneDeposit(amount) {
            this.balanceInit += amount;
      }

      // Prelievo dal conto
      oneWithDraw(amount) {
            if (amount <= this.balanceInit) {
                  this.balanceInit -= amount;
            } else {
                  console.log("Fondi insufficienti");
            }
      }

      // Stampa saldo attuale
      printBalance() {
            console.log(`Saldo del conto del figlio: ${this.balanceInit}`);
      }
}

class MotherAccount extends SonAccount {
      constructor() {
            super();
      }

      // Aggiunta dell'interesse al conto della madre (10%)
      addInterest() {
            const interest = this.balanceInit * 0.1;
            this.balanceInit += interest;
      }

      // Stampa saldo attuale con aggiunta dell'interesse
      printBalanceWithInterest() {
            console.log(
                  `Saldo del conto della madre (con interesse): ${this.balanceInit}`
            );
      }
}

// Utilizzo delle classi
const contoFiglio = new SonAccount();
const contoMadre = new MotherAccount();

// Operazioni sui conti
contoFiglio.oneDeposit(100);
contoFiglio.oneWithDraw(30);
contoFiglio.printBalance(); // Stampa saldo del figlio

contoMadre.oneDeposit(200);
contoMadre.addInterest();
contoMadre.printBalance(); // Stampa saldo della madre
contoMadre.printBalanceWithInterest(); // Stampa saldo della madre con interesse
*/
class SonAccount {
      balanceInit: number;
      constructor(_balanceInit: number) {
            this.balanceInit = _balanceInit;
      }
      deposit(amount: number): void {
            this.balanceInit += amount; //metodo per aggiungere soldi al saldo
            console.log("nuovo saldo" + this.balanceInit);
      }
      withdraw(amount: number): void {
            if (this.balanceInit >= amount) {
                  this.balanceInit -= amount;
                  console.log("prelievo con successo");
            } else {
                  throw new Error("saldo inufficente");
            }
      }
}

class MotherAccount extends SonAccount {
      interest(): void {
            let interest = this.balanceInit * 0.1;
            this.deposit(interest);
      }
}

let ciccio = new SonAccount(300); //creo la classe nuova da assegnare un valore
ciccio.deposit(400);
ciccio.withdraw(50);
//ciccio.withdraw(500);

let ciccia = new MotherAccount(40);
ciccia.deposit(300);
ciccia.interest();
