var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.deposit = function (amount) {
        this.balanceInit += amount; //metodo per aggiungere soldi al saldo
        console.log("nuovo saldo" + this.balanceInit);
    };
    SonAccount.prototype.withdraw = function (amount) {
        if (this.balanceInit >= amount) {
            this.balanceInit -= amount;
            console.log("prelievo con successo");
        }
        else {
            throw new Error("saldo inufficente");
        }
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.interest = function () {
        var interest = this.balanceInit * 0.1;
        this.deposit(interest);
    };
    return MotherAccount;
}(SonAccount));
var ciccio = new SonAccount(300); //creo la classe nuova da assegnare un valore
ciccio.deposit(400);
ciccio.withdraw(50);
//ciccio.withdraw(500);
var ciccia = new MotherAccount(40);
ciccia.deposit(300);
ciccia.interest();
