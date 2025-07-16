function fun1(x,y)
{
    result=x+y;
    return function()
    {
        console.log("Iam Anoymous Function","Sum is ",result)
    }
}

var o=fun1(100,200);
console.log(o)
o();