 
 let titolo=document.createElement('h1')
 titolo.innerText= 'La'+' '+ 'tombola'
 
let tombola=document.getElementById('tableTombola')
for(i=0;i<77;i++){
    let num=document.createElement('div')
    num.innerText= i
    num.classList.add('pad')
    tombola.append(num)

}

let botton1=document.createElement('button')
botton1.classList.add('bottone')
botton1.innerText='mescola'
tombola.append(botton1)

botton1.addEventListener('click',function(){
    let x= Math.floor(Math.random()*76)+1;
    let num=document.querySelector('.pad'+x )
    
})


    


