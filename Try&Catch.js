
try {
    console.log(a);
} catch (error) {
    console.log("hi");
    // console.log(error);
}

console.log("------");
let id=setInterval(() => {
    console.log("hii");
}, 2000);
clearInterval(id)
