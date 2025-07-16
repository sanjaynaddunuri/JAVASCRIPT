var city="warangal"

function f1()
{
    f2()
    console.log(city)
}

function f2()
{
    f3()
    console.log(city)
}
 
function f3()
{
    f1()
    console.log(city)
}
console.log(city)
f1()
f2()
f3()