var obj1={

    c:100
};
var obj2={

    c:500
};
function fnadd(x,y)
{
    console.log(x+y+this.c);
}
fnadd.call(obj1,100,200)
fnadd.call(obj2,100,200)
