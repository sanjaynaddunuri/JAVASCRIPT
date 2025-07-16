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
var fnadd1=fnadd.bind(obj1)
fnadd1(10,10)

var f1=fnadd.bind(obj2,50,50)
f1()


fnadd.bind(obj2,50,50)()

fnadd.bind(obj1)(10,10)