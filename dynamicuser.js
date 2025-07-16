var data = [
    {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    },
    {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    },
    {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    },

    {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    },
    {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    }, {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    }, {
        id: 101,
        name: "sanjushree",
        email: "sanjay@gmail.com"

    }
];


function createtable() {
    var table = document.createElement("table")
    var tr1 = document.createElement('tr')

    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    var th3 = document.createElement('th')

    th1.innerText = "ID"
    th2.innerText = "NAME"
    th3.innerText = "EMAIL"

    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)

    table.appendChild(tr1)
    table.width = "800px"
    table.frame = "box"
    table.rules = "all"
    table.style.margin = "auto"
    table.cellPadding = "10px"
    tr1.style.backgroundColor = "black"
    tr1.style.color = "white"

    

    for (let user of data) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")

        td1.innerText = user.id
        td2.innerText = user.name
        td3.innerText = user.email

        tr.appendChild(td1)
        tr.appendchild(td2)
        tr.appendchild(td3)

        tr.align="center"
        table.appendchild(tr)
    }

    var bodyref = document.getElementsByTagName("body")
    bodyref[0].appendChild(table);
}