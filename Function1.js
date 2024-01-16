//create a function that prints a poem
function Poem(){
console.log("Twinkle Twinkle little star");
}
Poem();

console.log("---------------");
//Create  a function to rolla dice and always display the value of the dice(1 to 6)
function display1To6()
{
   let randomNum=Math.floor(Math.random()*6)+1;
   console.log(randomNum);
}
display1To6()
console.log("----function argument---");
function printName(name){
    console.log(name);
}
printName("Dhananjay")

console.log("--------------");
//Create a function that gives us the average of 3 number
function average(a,b,c){
console.log((a+b+c)/3);
}
average(1,2,3)
console.log("----------");
function printTable(n){
for(i=n;i<=n*10;i+=n)
console.log(i);
}
printTable(2)

console.log("----------------");
//Create a function that return the sum of numbers from 1 to n
function add(n)
{
    let sum=0;
    for(i=1;i<=n;i++)
    {
     sum=sum+i;
    }
    return sum;
}
console.log(add(2));