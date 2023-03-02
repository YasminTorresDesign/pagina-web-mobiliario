const hamburguer= document.querySelector('.hamburguer');
const menu= document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(hamburguer)


hamburguer.addEventListener('click', ()=>{//click que desata una funcion de flecha
    menu.classList.toggle("spread")
})

 //console.log(e.target)
   window.addEventListener('click', e=>{
       if(menu.classList.contains('spread')
       && e.target !=menu && e.target != hamburguer){
        menu.classList.toggle("spread")
       }
   })


