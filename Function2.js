// let str ="Dhananjay,Aditya,Ashish";
// let res=str.slice(1,3)
// console.log(res);
//HOC:A function which takes another function as argument is Higher order function

function multipleGreet(fun,n){
for(i=1;i<=n;i++){
    fun()
}
}

let greet=function()
{
    console.log("Hello");
}
// multipleGreet(greet,2)
multipleGreet(function(){console.log("hey");},2)

console.log("-----Return function----");

function oddOrEvenFactory(request){
if (request=="odd") {
    let odd= function(n){
        console.log(!(n%2==0));
    }
    return odd;
}
else if(request=="Even"){
    let even= function(n){
        console.log((n%2==0));
    }
    return even;
}
else{
    console.log("Request is not matching");
}
}
let request="odd"

console.log("-----Method----------");
let calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }
}
console.log(calculator.add(1,3));