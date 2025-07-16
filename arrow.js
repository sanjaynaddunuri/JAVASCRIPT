function fn()
{
    return "Iam returning a Normal Function String"
}

var myArrowfun=()=>"Iam returning Arrow Function String"

console.log(myArrowfun())


var obj1={
    username:"sanjay",
    city:"warangal",
    print:function()
    {
        console.log(this.username,this.city)
    }
}

obj1.print()


var obj2={
    username:"sanjay",
    city:"warangal",
    print:()=>
    {
        console.log(this.username,this.city)
    }
}

obj2.print()