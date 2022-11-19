const btn = document.getElementById('btn')
const theNumber = document.getElementById('no')

let counter = 0;
theNumber.innerText = counter;

function incremntBy1(){
    counter++;
    theNumber.innerText = counter;
}
btn.addEventListener('click', incremntBy1)



const eg = document.getElementById('example')
eg.addEventListener('mouseover', ()=> {
    counter = 0;
    theNumber.innerText = counter;
})

eg.addEventListener('mouseout', ()=> {
    counter = -1;
    theNumber.innerText = counter;
})


