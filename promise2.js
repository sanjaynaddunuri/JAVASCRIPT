var promiseobject=new Promise(function(resolve,reject){
    //reject("sanjay")
    // resolve("sanjay")
    // resolve({
    //     status:true,
    //     data:[{},{}]
    // })
    reject({
        status:true,
        data:"error occurred"
    })
});

promiseobject.then(function(successdata){
console.log("Then",successdata)
}).catch(function(errordata){
console.log("catch",errordata)

})