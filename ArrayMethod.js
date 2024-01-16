console.log("------ForEach---------");
let arr=[1,2,3,4,5];
arr.forEach(element => {
    console.log(element);
});

let student=[
    {
        name:"Aman",
        marks:95
    },
    {
        name:"Shraddha",
        marks:94
    },
    {
        name:"Rajat",
        marks:93
    }
]
student.forEach((element)=>{
    console.log(element);
})

console.log("-------Filter-------");
let nums=[2,4,1,5,6,2,7,8,9];
let even=nums.filter((nums)=>{
   return nums%2==0
})
console.log(even);

console.log("------Every----------");
let eve=[1,2,3,4,5];
eve.every((ele)=>{
    return ele%2==0
})
console.log(eve);
console.log("--------------");
let num=[1,2,3,4,5,6,7,8,9,2,3,4,5,5];
let max=num.reduce((max,ele)=>{
if (max<ele) {
    return ele
}
else{
    return max
}
})
console.log(max);

console.log("-----spread---------");
// let biodata={
//     name:"Dhananjay",
//     age:24
// }
// let copyData={...biodata}
// console.log(copyData);

let bioData={
    name:"Dhananjay",
    age:24,
}
let copyData={...bioData,company:"Capgemini"};
console.log(copyData);

console.log("------Rest------");
function sum(...args){
    let total=0;
    for (const number of args) {
        total+=number;
    }
    return total;
}
console.log(sum(1,2,3,4,5));

console.log("-----------Destructuring---------");
let names=['Ajay','Vijay','Rahul','Ashish','Vinay']
let [winner,runnerUp,...others]=names;
console.log(winner,runnerUp,others);

console.log("--------Destructuring Objects-------");
const students={
name:"Karan",
class:9,
age:14,
subjects:["Hindi","English","Math","science","social science"],
userName:"karan123",
password:1234
}
const {password}=students;
console.log(password);