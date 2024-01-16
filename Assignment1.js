console.log("------Question1------------");
var num = 10;
if (num % 10 == 0) {
    console.log("Good");
}
else {
    console.log("Bas");
}
console.log("-----question3-------------");
var quarter = 2;
switch (quarter) {
    case 1:
        console.log("January,February,March");
        break;
        case 2:
        console.log("April,May,June");
        break;
        case 3:
        console.log("July,August,September");
        break;
        case 4:
            console.log("October,November,December");
            break;
   
}

console.log("-----Question4-----------");
let name="Apple";
if (name[0]=='A' || name[0]=='a' && name.length>5) {
    console.log("Golden string");
}

else{
    console.log("Not Golden");
}
console.log('-----Question5----------');
let num1=200;
let num2=600;
let num3=400;
if (num1>num2) {
    console.log(num1);
}
else if(num2>num3){
    console.log(num2);
}
else if(num3>num1)
{
    console.log(num3);
}

console.log("--------Question6------------");
var number1=1002;
var number2=47852
if ((number1%10)==(number2%10)) {
    console.log(number1%10);
}
else{
    console.log(number2%10);
}