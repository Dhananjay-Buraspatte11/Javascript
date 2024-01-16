function funName(){
    console.log("hello");
}
funName();

// console.log("------------------------");
// let str=["Dhananjay","Ajay","Ashish","Vijay","Rahul"];
// function concat(){
//     let ans
//     for (let i = 0; i < str.length; i++) {
//         ans +=str[i]
//       }
//       return ans;
// }
// console.log(concat());

console.log("----------------------");

let str=["Hi","Hello","bye","!"];
function concatination(){
let result;
for (let i = 0; i < str.length; i++) {
    result+=str[i]
    // console.log(str[i]);
}
return result;
}
console.log(concatination(str));

console.log("------------");
let greet="Hello";
function changeGreet(){
    let greet="Namaste";
    console.log(greet);
    function innerGreen(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();

//Hello
//Namaste
//Hello