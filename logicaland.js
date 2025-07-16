var details=[
    {
        brand:"Apple",
        model:"iphone14",
        price:1000
    },
    {
        brand:"samsumg",
        model:"galaxy",
        price:2000
    },
    {
        brand:"vivo",
        model:"vivo v27",
        price:40000
    },
    {
        brand:"Apple",
        model:"iphone 12",
        price:3000
    },
    {
        brand:"vivo",
        model:"vivo pro",
        price:4000
    },
    {
        brand:"samsung",
        model:"samsung s23",
        price:5000
    }
]

var d=details.filter(function(element,index){

    return (element.brand=="Apple" || element.brand=="samsung") && element.price > 1000;
})

console.log(d)
