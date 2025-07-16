var details=[
    {
        brand:"Apple",
        model:"iphone14",
        price:90000
    },
    {
        brand:"Samsumg",
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
    }
]

var newdata=details.filter(function(element,index)
{
    return element.price>50000;
})

console.log(newdata)