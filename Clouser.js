function outer()
{
    var city="delhi";
    console.log("Outer Function",city)
    function inner(x,y)
    {
        console.log(x+y);
        console.log("Inner Function",city)

    }
    
    // inner(10,20)
    

    return inner;
}
var fninner=outer()
fninner(5,5)