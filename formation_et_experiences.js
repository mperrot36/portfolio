const cards=[...document.querySelectorAll('.card')]

let index=0

function render(){

cards.forEach((c,i)=>{

const d=i-index

if(d===0){

c.classList.remove('hidden')

c.style.transform='translateX(0px) translateZ(0px) rotateY(0deg) rotateX(0deg)'

}

else if(d===1){

c.classList.remove('hidden')

c.style.transform='translateX(420px) translateZ(-180px) rotateY(-22deg)'

}

else if(d===-1){

c.classList.remove('hidden')

c.style.transform='translateX(-420px) translateZ(-180px) rotateY(22deg)'

}

else if(d>1){

c.classList.add('hidden')

c.style.transform='translateX(900px) translateZ(-600px) rotateY(-35deg)'

}

else{

c.classList.add('hidden')

c.style.transform='translateX(-900px) translateZ(-600px) rotateY(35deg)'

}

})

}

render()

document.getElementById('next').onclick=()=>{

index=(index+1)%cards.length

render()

}

document.getElementById('prev').onclick=()=>{

index=(index-1+cards.length)%cards.length

render()

}

document.addEventListener('keydown',e=>{

if(e.key==='ArrowRight')document.getElementById('next').click()

if(e.key==='ArrowLeft')document.getElementById('prev').click()

})

const carousel=document.getElementById('carousel')

let mx=0

let my=0

carousel.addEventListener('mousemove',e=>{

const r=carousel.getBoundingClientRect()

mx=(e.clientX-r.left)/r.width-.5

my=(e.clientY-r.top)/r.height-.5

const c=cards[index]

c.style.transform='translateX(0px) translateZ(0px) rotateY('+(mx*14)+'deg) rotateX('+(-my*12)+'deg)'

})

carousel.addEventListener('mouseleave',()=>{

render()

})
