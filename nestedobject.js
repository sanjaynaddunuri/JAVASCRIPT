var user=
{
name:"Sanjay",
id:1107,
isplaced:true,
address:{
    city:"Warangal",
    state:"telangana",
    pincode:506015,
    area:{
        area1:"karimnagar road",
        area2:"kakthiya vintage",
        area3:{
            sector1:"subashnagar colony",
            sector2:"chinthagattu"
        }
    }
}
}
console.log(user.address.city)
console.log(user.address.area.area1)
user.address.city="Hanamkonda"

delete user.address.area

user.address.areaName="hasanparthy"