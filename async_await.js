function promise() {
    // var prom=new Promise()
    // return prom
    return new Promise(function (resolve, reject) {
        resolve(
            {
                status: true,
                data: [
                    {
                        name: "sanjay"
                    },
                    {
                        name: "chinnu"
                    },
                    {
                        name: "sanjushree"
                    }
                ]
            }
        )

    })
}

async function catchPromise() {
    try {
        var responsedata = await promise();
    }
    catch (errordata) {
        console.log(errordata)
    }
    console.log(responsedata)
}

catchPromise()