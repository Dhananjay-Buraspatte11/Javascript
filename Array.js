let data=['Dhananjay',23,7.9];
console.log(data);
let cars=['Audi','bmw','xuv','maruti']
cars.push("Toyota")
console.log(cars);
cars.pop()
console.log(cars);
cars.unshift("Toyota")
console.log(cars);
cars.shift()
console.log(cars);

console.log("-----Concat-----------");
let primary=['red','Yellow','blue'];
let secondary=['Orange','Green','voilet']
console.log(primary.concat(secondary));
console.log(primary.reverse());

console.log("-----Slice--------------");
console.log(cars.slice(2));
console.log(cars.slice(2,3));

console.log("--------Splice--------------");
let colors=['red','Yellow','blue','orange','pink','white']
console.log(colors.splice(2));
console.log(colors.splice(0,1));

console.log("---Sorts-------");
let squares=[25,16,4,49,36,9]
console.log(squares.sort());