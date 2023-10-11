
let form = document.querySelector("#myForm")
let formButton= document.querySelector("#submitButton")
 formButton.addEventListener( 'click',function(e){
    e.preventDefault()
    let text=form.querySelector('[name="text"]')
 let valoretext= text.value
 console.log (valoretext)
let testo= document.getElementById("MIA")
let p=document.createElement("p")
p.innerText=valoretext
let=elimina=document.createElement('button')
 elimina.innerTexte='elimina'
 p.append(elimina)
 testo.append(p)

if(text.value){
    text.style.textDecoration="overline"
    
}else{ text.style=""}
}) 

let frase= document.querySelector("#conferm")
frase.addEventListener('click')
    let f= document.createElement("p")
    p.innerText='confermato'
