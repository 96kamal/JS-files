function cube(q)
{
    return q*q*q
}
function check(n)
{
    
    temp1=n
    let sum
    let rem
    while(n!=0)
    {
rem=n%10
sum=sum+cube(rem)
n=n/10
n=Math.floor(n)
    }
    if(sum==temp1)
    {
        console.log("this is strong num")
    }
    else
    {
        console.log("is a weak number")
    }
}
check(153)

