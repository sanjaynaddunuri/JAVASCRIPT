var obj1={
    username:'sanjay',
    city:"warangal",
    id:101,
    gender:"male"
};

var obj2={
    ...obj1,
    email:"sanjay@gmail.com",
    city:"chinthagattu"
}
console.log(obj2)

var arr1=[100,"riya","female",90000,"mumbai"]
var arr2=[...arr1]
console.log(arr2)