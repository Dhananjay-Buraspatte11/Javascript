let myFriends=['Dhananjay','Ajay','Vijay','Rahul']
console.log("-------For-Loop------");
for (let i = 0; i < myFriends.length; i++) {
 console.log(myFriends[i]);
}
console.log("-------For-In------");
for (const key in myFriends) {
   console.log(key);
}
console.log("-----For-Of----");
for (const iterator of myFriends) {
    console.log(iterator);
}
console.log("-------ForEach-------");
myFriends.forEach((index,element) => {
    console.log(`Index: ${index} and elements are ${element}`);
});


console.log("-------Map------");
let arr=[2,3,4,5,6,7];
let data=arr.map((curElm,index,array)=>{
   return curElm;
}).filter((curElm)=>{
    return curElm>2;
  
})
console.log(data);

let arr1=[2,3,4];
let ans=arr1.reduce((accumulator,curElm)=>{
return accumulator=accumulator+curElm
})
console.log(ans);
let arr2=[2,3,4];
let ans2=arr2.map((curElm)=>{
    return curElm;
}).filter((curElm)=>{
return curElm>2;
})
console.log(ans2);

// console.log("--------Currying---------");
// function sum(num1){
//   return function(num2){
//     return function(num3){
//       console.log(num1+num2+num3);
//     }
//   }
// }
// sum(5)(3)(2)
console.log("-----Currying--------");
function sum(num1){
    return function(num2){
        return function(num3){
            console.log(num1+num2+num3);
        }
    }
}
sum(1)(2)(3)
console.log("-------------Reverse String---------");
let myName="Dhananjay";
let reverseName=myName.split("").reverse().join("");
console.log(reverseName);
let sortName=reverseName.split("").sort().join("");
console.log(sortName);