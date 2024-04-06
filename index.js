let btn =document.querySelector("button");
let p=document.querySelector("#newfact")
let url ="https://catfact.ninja/fact";

btn.addEventListener("click", async ()=>{
    let fact = await getfact();
p.innerText=fact
})

async function getfact(){
    try {
        let res = await axios.get(url);
        return  res.data.fact;
    } catch (error) {
        return "No fact found"
    }
}