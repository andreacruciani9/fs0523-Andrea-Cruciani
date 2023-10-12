
let inputButton=document.getElementById('submitButton')
let lista =document.getElementById('lista')
 inputButton.addEventListener("click",function(){
    let testo=document.getElementById('text');
    if(!testo.value){
        alert('minchia')
        
    }
    

let li=document.createElement('li')
li.innerText= text.value+'  '+'confermato';
let elimina= document.createElement('button')
elimina.innerText='elimina';
elimina.addEventListener('click',function(){
   li.remove();
})



    li.style.textDecoracion="line-trought";

li.append(elimina);
lista.prepend(li);
testo.value='';
 






})