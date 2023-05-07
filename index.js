const submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    axios.post("https://crudcrud.com/api/10d4278371e146ef9a4cc8f70af142f5/apointment", {
        Name: name,
        Email: email
    });
})

const get = document.getElementById("get");
get.addEventListener("click",async()=>{
    let res = await axios.get("https://crudcrud.com/api/10d4278371e146ef9a4cc8f70af142f5/apointment");
    //res = res.JSON();
    let data = res.data;
    // data
    const table = document.getElementById("table");
   // console.log(data);
   const tr = document.createElement("tr");
        const td1 = document.createElement("th");
        td1.appendChild(document.createTextNode("Id"));
        const td2 = document.createElement("th");
        td2.appendChild(document.createTextNode("Name"));
        const td3 = document.createElement("th");
        td3.appendChild(document.createTextNode("Email"));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
   
    for(let i=0;i<data.length;i++){
       // console.log("data ",data[i]);
        // const obj = data["i"];
        // console.log(obj);
        // console.log(obj["_id"]);
        // console.log(obj["name"]);
        const id = data[i]["_id"];
        const name = data[i]["name"];
        const email = data[i]["email"];
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(id));
        const td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(name));
        const td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(email));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
})