let btn=document.querySelector('button');
btn.addEventListener('click',function()
{
    let h3=document.querySelector('h3');
    let randomColor=getRandomColor();
    h3.innerText=randomColor;
    let div=document.querySelector('div')
    div.style.backgroundColor=getRandomColor()
    // div.style.backgroundColor=getRandomColor;
    console.log("color updated");
})

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`Rgb(${red},${green},${blue})`
    return color
    console.log(color);
}
let para=document.querySelector('p');
para.addEventListener("click",function(){
    console.log("Paragraph is clicked");
})