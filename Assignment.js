console.log("-----1-----------");
let data=[7,9,0,-2];
let n=3;
let ans=data.slice(0,n);
console.log(ans);//[ 7, 9, 0 ]
console.log("--------2-----------");
let data1=[7,9,0,-2];
let n1=3;
let ans1=data1.slice(data1.length-n);
console.log(ans1);
console.log("-------3-----------");
let str="Dhananjay"
if (str==="") {
    console.log('String is blank');
}
else{
    console.log("String is not blank");
}
console.log("--------4-------");
let str1="Dhananjay";
let idx=3
if (str1[idx]===str1[idx].toLocaleLowerCase()) {
    console.log("Charecter is lower case");
}
else{
    console.log('Charecter is not lower case');
}
console.log("-----5----------");
let data2=prompt("Enter The data")
let ans2=data2.trim();
console.log(ans2);