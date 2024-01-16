let bioData = {
    name: "Dhananjay",
    age: 23,
    company: "Capgemini"
};

let mappedData = Object.entries(bioData).map(([key, value]) => {
    return { key, value };
});

console.log(mappedData);

// console.log("-----Array-Destructuring-------");
// let myBioData=["Dhananjay",'Buraspatte',24];
// let [firstName,lastName,age]=myBioData;
// console.log(firstName);
console.log("------Object Destructuring");
let myBioData1={
    firstName:"Dhananjay",
    lastName:"Buraspatte",
    age:23
}
let {firstName,lastName,age}=myBioData1;
console.log(firstName);

console.log("---Spread-Operator---------");
let myFriends=["Dhananjay",'Ajay','Vijay','Rahul'];
console.log(...myFriends);

console.log("---------Array-Object--------");
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 95 },
];
let studentDetails=students.map((curElm)=>{

  return curElm.name;
})
console.log(studentDetails);

let filterStudent=students.filter((curElm)=>{
  return curElm.grade>90;
})
console.log(filterStudent);

console.log("------HOF----------------");

const fun2=()=>{
console.log("Fun2");
}
const fun1=()=>{
  console.log("Fun1");
  fun2()
  console.log("HI");
}

fun1()

