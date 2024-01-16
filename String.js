let name="    Dhananjay   ";
console.log(name.trim());

let names="Dhananjay";
console.log(names.toLocaleLowerCase());
console.log(names.toLocaleUpperCase());

console.log("-----indexOf----------");
let msg="ILoveCoding";
console.log(msg.indexOf("Love"));
console.log(msg.indexOf('k'));
console.log(msg.indexOf('o'));

console.log("-------Slice---------");
let msg2="hello";
console.log(msg2.slice(0,4));
let msg1="apnacollege";
console.log(msg1.slice(0,4));
let msg3="ILoveCoding";
console.log(msg3.slice(5,11));
let msg4="WelcomeToCapgemini";
console.log(msg4.slice(9,18));

console.log("----Replace-------");
let Names="Welcome To MITAOE";
console.log(Names.replace('MITAOE','Capgemini'));

console.log("------Repeat-----");
let data="Hello";
console.log(data.repeat(4));