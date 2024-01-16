// // console.log("hi");
// function savetoDb(data)
// {
//     return new Promise((success,failure)=>{
//         let interentSpeed=Math.floor(Math.random()*10)+1;
//         if (interentSpeed>4) {
//             success("success: Data was saved")
//         }
//         else{
//             failure("failure: weak connections")
//         }
//     })
// }   

// let obj=savetoDb("Dhananjay")
// obj.then(()=>{
//     console.log("success: ");
// })
// .catch(()=>{
//     console.log("failure:");
// })

function savetoDb(data)
{
    return new Promise((success,reject)=>{
        let interentSpeed=Math.floor(Math.random()*10)+1;
        if (interentSpeed>4) {
            success("success:Data was saved")
        }
        else{
            reject("failure:Weak connections");
        }
    })
}
// let obj=savetoDb("Dhananjay");
// obj.then(()=>{
//     console.log("success: ");
// })
// .catch(()=>{
//     console.log("Reject: ");
// })

// console.log("-----------------------------------");

savetoDb("Apna College")
.then((resolve)=>{
    console.log("Promise 1 resolved: ");
    console.log("Result of promise:",resolve);
    return savetoDb("Hello world")
})

.then((resolve)=>{
    console.log("Promise 3 resolved: ");
    console.log("Result of promise:",resolve);
})

.catch((reject)=>{
    console.log("Promise was rejected: ");
    console.log("reject:",reject);
})