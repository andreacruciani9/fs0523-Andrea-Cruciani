let obj = {};
/*{
      let pizza = {
            gusto: "Margherita",
            prezzo: 5,
            mostraDettagli: function () {
                  console.log(
                        ` la pizza ${thiù.gusto} costa ${this.prexxo} £ `
                  );
            },
      };

      pizza.mostraDettagli();

      let pizza2 = {
            gusto: "cargherita",
            prezzo: 7,
            mostraDettagli: function () {
                  console.log(
                        ` la pizza ${this.gusto} costa ${this.prezzo} £ `
                  );
            },
      };
      pizza2.mostraDettagli();
      console.log(pizza);
}*/
{
      function Pizza() {
            (this.gusto = "capricciosa"),
                  (this.prezzo = 7),
                  (this.mostraDettagli = function () {
                        console.log(
                              ` la pizza ${this.gusto} costa ${this.prezzo} £ `
                        );
                  });
      }
      let capricciosa = new Pizza();
      console.log(capricciosa);
}
