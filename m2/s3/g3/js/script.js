fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
            res.forEach((element) => {
                  let div = document.createElement("div");
                  div.innerHTML = element.name;
                  document.querySelector("#dati").append(div);
            });
      });
function scrivi(selettoreCss, testo, fn) {
      let target = document.querySelector(selettoreCss);
      target.innerHTML = fn(testo);
      console.log(target);
}
scrivi("#testo1", "ciao", (t) => t + "<hr>");
scrivi("#testo3", "ciao", grassetto);

scrivi("#testo2", "ciao", corsivo);

function grassetto(testo) {
      return `<b>${testo}</b>`;
}
function corsivo(testo) {
      return `<i>${testo}</i>`;
}
