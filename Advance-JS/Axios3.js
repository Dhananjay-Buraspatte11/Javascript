const url="https://icanhazdadjoke.com/";

async function getData()
{
    try {
        const config={headers:{Accept:'application.json'}}
        let res=await axios.get(url,config);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
getData();