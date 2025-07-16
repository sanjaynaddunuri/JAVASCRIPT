function fngetdata() {
    //    var promobj= fetch("https://jsonplaceholder.typicode.com/users")
    //    promobj.then().catch()
    fetch("https://jsonplaceholder.typicode.com/users").then((succes) => {
        return succes.json()
    }).then((data)=>
    {
        var ol=document.createElement("ol")
        data.forEach(element => {
            var li=document.createElement("li")
            li.innerText=element.name
            ol.appendChild(li)
        });
        document.getElementById("body").appendChild(ol)
    })
    .catch((error) => {

        var h2=document.createElement("h2")
        h2.innerText="Something went Wrong"
        h2.style.fontsize="52px"
        h2.style.color="red"
        document.getElementById("body").appendChild(h2)
    })
}