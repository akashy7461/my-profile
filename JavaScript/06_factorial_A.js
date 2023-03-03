function factorialOfNum(num)
{
    
    if(num===undefined||num===null|| isNaN(num))
        {
            
            return 'please Enter vaild Number: '
        } 
        if(num===0)
        {
            return 1;
        }
    let numb=1;
    for(let i=num;i>0;i--)
    {
        numb*=i;
             
    }
    return numb;
    
}


console.log("The factorial of 5 is:",factorialOfNum(5));
console.log("The factorial of 3 is:",factorialOfNum(3));
console.log("The factorial of null is:",factorialOfNum(null));
console.log("The factorial of 8 is:",factorialOfNum(8));
console.log("The factorial of undefined is:",factorialOfNum(undefined));
console.log("The factorial of 9 is:",factorialOfNum(9));
console.log("The factorial of 0 is:",factorialOfNum(0));
console.log("The factorial of NaN is:",factorialOfNum(NaN));
