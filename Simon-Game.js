let gameSeq=[];
let userSeq=[];
let h2=document.querySelector('h2');

let btns=["yellow","red","purple","green"]
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game started");
        started=true;

        levelUp()
    }
})
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 250);
}
function levelUp(){
level++;
h2.innerText=`Level ${level}`;

let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`)
console.log(randIdx);
console.log(randColor);
console.log(randBtn);
btnFlash(randBtn);
}