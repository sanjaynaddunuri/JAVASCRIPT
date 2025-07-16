function checkprime(n)
{
    var isPrime=true
//     if (n<1)
//     {
//         console.log("Enter Positive Number")
    
//      if (n==1)
//     {
//         console.log("1 is not a prime number")
//     }
//     else if(n>1)
//         {
//             for (var i=2;i<n;i++)
//             {
//                 if(n%i==0)
//                 {
//                     isPrime=false
//                 }
//             }
//         }
//     }
// if(isPrime)
// {
//     console.log("Given Number is Prime Number")
// }
// else{
//     console.log("Given Number is Not Prime Number")
// }
if(n<=1)
{
    console.log("Please Dont enter negative number or equal to 1")
}

else if (n>1)
{
    for(var i =2;i<n;i++)
    {
        isPrime=false
    }
}
if (isPrime)
{
    console.log("given number is prime")
}
else
{
    console.log("Given number is not prime")
}

}

checkprime(-7)