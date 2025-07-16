function fun1(x,y)
{
    console.log(x+y);
}

function fun2()
{
    console.log("SanjuShree")

}
function fun3(a)
{
    console.log(a);
    a();
    a();
    a();
}

fun3(function()
{var  city="warangal";
    console.log(city)

});


fun3(fun2);

fun3(fun1);
