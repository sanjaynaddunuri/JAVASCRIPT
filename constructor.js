class user
{
    username
    gender
    email
    constructor(name,gender,email)
    {
        this.username=name
        this.gender=gender
        this.email=email
        this.city="warangal"

    }
    display()

    {
        console.log(this.name,this.gender,this.email)
    }
}

var user1=new user("sanjay","male","sanjay@gmailcom")
var user2=new user("chinnu","female","srija@gmailcom")
var user3=new user("sanjushree","male","sanjushree@gmailcom")

console.log(user1)
console.log(user2)
console.log(user3)