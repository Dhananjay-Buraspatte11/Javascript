console.log("------1------------");
const arrayAverage=(arr)=>{
let total=0;
for (const number of arr) {
    total+=number;
}
return total/9;
}
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arrayAverage(arr));

console.log("-----2------------");
const isEven=()=>{
    let num=3
    if (num%2==0) {
        return "even"
    }
    else{
        return "odd"
    }
}
console.log(isEven());

console.log("-------3-----------");
// const object={
//     message:"Hello world",
//     logMessage(){
//         console.log(this.message);
//     }
// }
// setTimeout(object.logMessage,1000)

console.log("-----4-------------");
let length=4;
function callback(){
console.log(this.length);
}
const object={
    length:5,
    method(callback){
        callback;
    }
}
object.method(callback,1,2)