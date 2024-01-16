console.log("-------1-----");
let nums=[1,2,3,4,5];
let square=nums.map((curElm)=>{
    return curElm*curElm
})

let sum=square.reduce((accumulator,curElm)=>{
    return accumulator+curElm
})
let avg=sum/nums.length
console.log(square);
console.log(sum);
console.log(avg);

console.log("------2--------");
let newArray=[1,2,3,4,5]
let ans=newArray.map((curElm)=>{
    return curElm+5
})
console.log(ans);

console.log("------3---------");
let str=["Dhananjay","Ajay",'vijay','anil'];
let newStr=str.map((curElm)=>{
    return curElm.toUpperCase()
})
console.log(newStr);

console.log("---4----------");
// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>(v*2))
// ]

// console.log(doubleAndReturnArgs([1,2,3,7],2,3));
// console.log(doubleAndReturnArgs([2],10,4));

const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((e)=>(e*2))
]

console.log(doubleAndReturnArgs([1,2,3],1,2,3));

console.log("------5---------");
const mergeObjects=(obj1,obj2)=>({
    ...obj1,...obj2
})
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));

// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));

