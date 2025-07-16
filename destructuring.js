var obj = {
    username: 'sanjay',
    city: "warangal",
    id: 101,
    gender: "male"
}
var { city, gender, id } = obj
console.log(city, gender, id)


var products = ["iphone14", "vivo v27", "samsung s23", "Iphone 13", "samsung a34"]
var [element1,element2,element3]=products

console.log(element1,element2,element3)