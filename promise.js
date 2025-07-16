var promiseobject=new Promise(function(resolve,reject){
    //reject("sanjay")
    // resolve("sanjay")
    resolve({
        status:true,
        data:[{},{}]
    })
    // reject({
    //     status:true,
    //     data:"erroer occurred"
    // })
});

console.log(promiseobject)