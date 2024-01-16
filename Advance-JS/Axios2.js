let btn=document.querySelector('button');
btn.addEventListener('click',async()=>{
    let res=await getData();
    console.log(res);
    let olp=document.querySelector("#result")
    olp.setAttribute("src",res)
})



let url="https://dog.ceo/api/breeds/image/random";
async function getData()
{
    try {
        let res=await axios.get(url);
        return res.data.message;
    
    } catch (error) {
        console.log(error);
        return "No data found"
    }
}
getData();