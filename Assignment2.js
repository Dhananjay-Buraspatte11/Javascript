
console.log("--------Question1---------");
let arr=[7,9,0,-2];
let n=3;
let ans=arr.slice(0,n);
console.log(ans);

console.log("----Question2-----------");
let arr1=[7,9,0,-2];
let n1=3;
let ans1=arr.slice(arr1.length-n)
console.log(ans1);

console.log("-----Question3-------");
let str="Dhananjay";
console.log(str.includes("Dhananjay"));

console.log("-------6-----------");
let arr3=[99,"Dhananjay",'Ajay',44,55];
let n3=64;
if (arr3.indexOf(n)===-1) {
    console.log("Element exist in array");
}
else{
    console.log("Element is not exist in array");
}