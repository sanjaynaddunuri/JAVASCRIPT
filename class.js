class Products
{
    brandname="Apple";
    modelname="mackbook pro "
    price=200000
    rating=4.5
    display()
    {
        console.log(this.brandname)
        console.log(this.modelname)
        console.log(this.rating)
        console.log(this.price)
    }

    changeprice(newprice)
    {
        this.price=newprice;
        this.display()
    }
}

var product1=new Products()
var product2=new Products()
console.log(product1)
console.log(product2)

product1.display()
product2.display()
console.log("--------------------------------")
product2.brandname="samsung"
product2.price=100000
product2.rating=5
product2.modelname="samsung ultra s23s"
product2.display()


