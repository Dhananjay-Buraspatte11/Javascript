// let num=[1,2,3,4,5,6,10,20,30].every((ele)=>(ele%10==0))
// console.log(num);
let num=[1,2,3,4,5,6,10,20,30];
let ans=num.every((ele)=>(ele % 10==0));
console.log(ans);

console.log("-------------");
let number=[1,2,3,4,5,6,10,20,30];
let min=number.reduce((min,ele)=>{
    if (min<ele) {
        return min
    }
    else {
        return ele
    }
})
console.log(min);


