let i = 1;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("-----------------");
for (let i = 10; i >= 5; i--) {
    console.log(i);
}
console.log("------Print Odd number between 1 to 15--------");
let num;

for (let i = 0; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log("-----Print Even Number between 1 to 15");
for (let i = 1; i <= 15; i++) {
    if (i%2==0) {
        console.log(i);
    }
}
console.log("---------------------------");
for (let i = 1; i < 15; i=i+2) {
    console.log(i);
    }

    console.log("-------Print the table of 5-------");
    for (let i = 5; i <= 50; i=i+5) {
       console.log(i);
    }

    console.log("-----Loops In Array------------");
    let fruits=['Mango','Apple','banana','litchi','orange']
    for (let i = 0; i < fruits.length; i++) {
        console.log(i,fruits[i]);
    }
    console.log("--Loop with Nested Arrays--");
    let heros=[['ironman','spiderman','thor'],['superman','wonder woman','flash']]
    for (let i = 0; i < heros.length; i++) {
        console.log(i);
        for (let j = 0; j < heros[i].length; j++) {
           console.log(heros[i][j]);
            }
        }

        console.log("------------------------");
        let student=[["aman",95],["Shradha",94.4],["karan",100]]
        for (let i = 0; i < student.length; i++) {
            console.log(student[i]);
            for (let j = 0; j < student[i].length; j++) {
             console.log(student[i][j]);
            }
        }

        console.log("--Nested For-Of loop------");
        let heros1=[['ironman','spiderman','thor'],['superman','wonder woman','flash']]
        for (const list of heros1) {
            for (const names of list) {
                console.log(names);
            }
        }