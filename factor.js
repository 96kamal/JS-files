 
function factors(n)
{
for(let i=1 ;i<=n;i++)
{
    if(n%i==0)
    {
        // console.log(i)
        console.log("factor is: ",i)
    }
else{
    console.log("not a factor of 9:",n/i)
}
}
}
factors (9)
// function checkeven(w)
// {
// for(i=2;i<=100;i++){
//     if(i%2==0)   {
//         console.log("number is even:",i)
//     }
//     else if(i%2!=0)   {
//         console.log("number is odd: ",i)
//     }
// }
// }
// checkeven(98)


// checkodd(3)


// function checkodd(o)
// {
//     for(i=1;i<=100;++i)
//     {
//         if(i%2!=0)
//         {
//             console.log("number is odd: ",i)
//         }
//     }
// }
// checkodd(1)