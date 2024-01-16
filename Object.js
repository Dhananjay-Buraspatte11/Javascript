let student={
    name:"Shraddha",
    age:23,
    marks:94.4,
    city:"Pune"
}
student.city="Mumbai";
student.gender="Female";
student.marks="A";
console.log(student);
delete student.marks;
console.log(student);

console.log("Generate the random number between 1 to 100");
let random=Math.floor(Math.random()*100)+1;
console.log(random);

console.log("--------------------");
console.log("Generate random between 1 to 5");
let random1=Math.floor(Math.random()*5)+1;
console.log(random1);