let btn=document.querySelector('button');
btn.addEventListener('click',async()=>{
    let res=await getData();
    let olp=document.querySelector("#result")
    olp.innerText=res;
})

let url="https://catfact.ninja/fact";
async function getData()
{
    try {
        let res=await axios.get(url);
        return res.data.fact;
    
    } catch (error) {
        console.log(error);
        return "No data found"
    }
}
getData();