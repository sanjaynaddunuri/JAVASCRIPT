var details=[
    {
        brand:"Apple",
        model:"iphone14",
        price:90000
    },
    {
        brand:"samsumg",
        model:"galaxy",
        price:110000
    },
    {
        brand:"vivo",
        model:"vivo v27",
        price:40000
    },
    {
        brand:"Apple",
        model:"iphone 12",
        price:70000
    },
    {
        brand:"vivo",
        model:"vivo pro",
        price:430000
    },
    {
        brand:"samsung",
        model:"samsung s23",
        price:143000
    }
]

var d=details.filter(function(element,index){

    return element.brand=="Apple" || element.brand=="samsung" 
})

console.log(d)
