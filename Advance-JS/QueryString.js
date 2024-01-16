let url="http://universities.hipolabs.com/search?name=middle";
let country="nepal";

async function getData()
{
    try {
        let res= await axios.get(url);
        console.log(res.data);
console.log(res.data[3].country);
    } catch (error) {
        console.log("Err"+error);
    }
}
getData();