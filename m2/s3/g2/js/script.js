let form = document.querySelector("#myForm"); //se ho un form posso usare e.preventdefault
let formButton = document.querySelector("#submitButton");
let saveButton = document.querySelector("#save");
let previusVal = document.querySelector("#previousVal");
/*saveButton.addEventListener("click", function () {
     let nomeField = document.querySelector("#nome");
      localStorage.setItem("nome", nomeField.value);
      nomeField.value = "";
      checkAndWrite();
});

formButton.addEventListener("click", function () {
      localStorage.removeItem("nome");
});*/ //la faccio cosi senza form

/*function checkAndWrite(){
let nome=localStorage.getItem("nome");
if(nome){
    let previusVal=document.querySelector("#previusVal")
    previusVal.innerText=nome;
}}
window.onload=checkAndWrite();

formButton.addEventListener('click', function(){
    localStorage.remuveItem('nome')
});*/

formButton.addEventListener("click", function (e) {
      e.prevetdefault();

      let valid = true;
      if (!nome.value) {
            nome.style.border = " 1px solid red";
            nome.nextElementSibling.innerText = "compila questo campo";
            valid = false;
      } else {
            formButton.addEventListener("click", function () {
                  localStorage.remuveItem("nome");
                  saveButton.addEventListener("click", function () {
                        let nomeField = document.querySelector("#nome");
                        localStorage.setItem("nome", nomeField.value);
                        previusVal.innerText = nome;
                  });
            });
      }
});
/*
formButton.addEventListener("click", function () {
      localStorage.removeItem("nome");
});*/
//faccio un contatore
/*
let tempoSalvato = sessionStorage.getItem("tempo");
let contatore;
if (!tempoSalvato) {
      contatore = 0;
} else {
      contatore = tempoSalvato;
}

let tempoHTML = document.querySelector("#tempo");
setinterval(() => {
      tempoHTML.innerText = contatore;
      localStorage.setiteme("tempo", contatore);
      contatore++;
}, 1000);*/
