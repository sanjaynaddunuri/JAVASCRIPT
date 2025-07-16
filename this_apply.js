
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
fnadd.apply(obj1,[50,50])
fnadd.apply(obj2,[50,50])